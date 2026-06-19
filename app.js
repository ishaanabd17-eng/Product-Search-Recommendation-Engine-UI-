// ==========================
// USERS DATABASE
// ==========================

let users =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];

// ==========================
// SIGN UP
// ==========================

function signup() {

    const name =
        document.getElementById(
            "signup-name"
        ).value;

    const email =
        document.getElementById(
            "signup-email"
        ).value;

    const password =
        document.getElementById(
            "signup-password"
        ).value;

    if (
        !name ||
        !email ||
        !password
    ) {
        alert(
            "Please fill all fields."
        );
        return;
    }

    const existingUser =
        users.find(
            user =>
                user.email === email
        );

    if (
        existingUser
    ) {
        alert(
            "Email already exists."
        );
        return;
    }

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert(
        "Account Created Successfully!"
    );

    window.location.href =
        "login.html";
}

// ==========================
// LOGIN
// ==========================

function login() {

    const email =
        document.getElementById(
            "login-email"
        ).value;

    const password =
        document.getElementById(
            "login-password"
        ).value;

    const user =
        users.find(
            user =>
                user.email === email &&
                user.password === password
        );

    if (user) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        alert(
            "Login Successful!"
        );

        window.location.href =
            "index.html";
    }

    else {

        alert(
            "Invalid Email or Password"
        );
    }
}

// ==========================
// DISPLAY USER NAME
// ==========================

window.onload =
    function () {

        const currentUser =
            JSON.parse(
                localStorage.getItem(
                    "currentUser"
                )
            );

        const username =
            document.getElementById(
                "username"
            );

        if (
            currentUser &&
            username
        ) {
            username.innerText =
                currentUser.name;
        }
    };

// ==========================
// SEARCH PRODUCT
// ==========================

function searchProduct() {

    const product =
        document.getElementById(
            "searchInput"
        )
        .value
        .trim()
        .toLowerCase();

    const results =
        document.getElementById(
            "results"
        );

    if (!product) {

        alert(
            "Please enter a product."
        );

        return;
    }

    let html = "";

    // ==========================
    // IPHONE
    // ==========================

    if (
        product.includes(
            "iphone"
        )
    ) {

        html = `
        <h2>Search Results</h2>

        <div class="result-card">

            <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=400&auto=format&fit=crop"
            class="product-image"
            >

            <div>

                <h3>
                    iPhone 15
                </h3>

                <p>
                    🟨 Amazon - ₹62,999
                </p>

                <p>
                    🟦 Flipkart - ₹63,499
                </p>

                <p>
                    🩷 Myntra - ₹61,999
                </p>

                <p>
                    🏆 Best Deal:
                    Myntra - ₹61,999
                </p>

            </div>

        </div>

        <div class="result-card">

            <div>

                <h3>
                    Recommended Products
                </h3>

                <p>
                    AirPods Pro
                </p>

                <p>
                    Apple Watch
                </p>

                <p>
                    MagSafe Charger
                </p>

            </div>

        </div>
        `;
    }

    // ==========================
    // NIKE
    // ==========================

    else if (
        product.includes(
            "nike"
        )
    ) {

        html = `
        <h2>Search Results</h2>

        <div class="result-card">

            <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop"
            class="product-image"
            >

            <div>

                <h3>
                    Nike Air Force 1
                </h3>

                <p>
                    🟨 Amazon - ₹8,999
                </p>

                <p>
                    🟦 Flipkart - ₹8,499
                </p>

                <p>
                    🩷 Myntra - ₹7,999
                </p>

                <p>
                    🏆 Best Deal:
                    Myntra - ₹7,999
                </p>

            </div>

        </div>

        <div class="result-card">

            <div>

                <h3>
                    Recommended Products
                </h3>

                <p>
                    Adidas Ultraboost
                </p>

                <p>
                    Puma Running Shoes
                </p>

                <p>
                    Skechers Go Walk
                </p>

            </div>

        </div>
        `;
    }

    // ==========================
    // HEADPHONES
    // ==========================

    else if (
        product.includes(
            "headphone"
        ) ||
        product.includes(
            "sony"
        )
    ) {

        html = `
        <h2>Search Results</h2>

        <div class="result-card">

            <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop"
            class="product-image"
            >

            <div>

                <h3>
                    Sony WH-1000XM5
                </h3>

                <p>
                    🟨 Amazon - ₹24,999
                </p>

                <p>
                    🟦 Flipkart - ₹25,499
                </p>

                <p>
                    🩷 Myntra - ₹24,799
                </p>

                <p>
                    🏆 Best Deal:
                    Myntra - ₹24,799
                </p>

            </div>

        </div>

        <div class="result-card">

            <div>

                <h3>
                    Recommended Products
                </h3>

                <p>
                    Bluetooth Speaker
                </p>

                <p>
                    Wireless Earbuds
                </p>

                <p>
                    Smart Watch
                </p>

            </div>

        </div>
        `;
    }

    // ==========================
    // DEFAULT
    // ==========================

    else {

        html = `
        <h2>Search Results</h2>

        <div class="result-card">

            <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop"
            class="product-image"
            >

            <div>

                <h3>
                    ${product}
                </h3>

                <p>
                    🟨 Amazon - Product Available
                </p>

                <p>
                    🟦 Flipkart - Product Available
                </p>

                <p>
                    🩷 Myntra - Product Available
                </p>

                <p>
                    🏆 Best Deal:
                    Check all platforms
                </p>

            </div>

        </div>

        <div class="result-card">

            <div>

                <h3>
                    Recommended Products
                </h3>

                <p>
                    Trending Products
                </p>

                <p>
                    Similar Products
                </p>

                <p>
                    Popular Picks
                </p>

            </div>

        </div>
        `;
    }

    results.innerHTML =
        html;
}