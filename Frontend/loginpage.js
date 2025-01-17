// Function to handle the form submission for login.
async function login() {

    // Get the login form values.
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Perform the login logic here using the provided email and password.
    try {
        const response = await fetch("http://localhost:4003/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        // Parse the response JSON and handle the result.
        const result = await response.json();

        // Display success or error message to the user
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