// Sign-up form submission event listener
async function signUp() {

    // Get form values from the DOM
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    // Validate form inputs

    // TODO: Add more validation rules here
    try {
        const response = await fetch("http://localhost:4003/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ First_name: firstName, Last_name: lastName, email, password }),
        });

        // Handle the server response
        const result = await response.json();

        // Display success or error message to the user
        if (response.ok) {
            document.getElementById("signup-message").style.display = "block";
            document.getElementById("signup-error").style.display = "none";
        } else {
            document.getElementById("signup-error").style.display = "block";
            document.getElementById("signup-message").style.display = "none";
        }
    } catch (error) {
        console.error("Error during sign-up:", error);
    }
}