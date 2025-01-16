async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const response = await fetch("http://localhost:4003/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById("login-message").style.display = "block";
            document.getElementById("login-error").style.display = "none";
        } else {
            document.getElementById("login-error").style.display = "block";
            document.getElementById("login-message").style.display = "none";
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
}