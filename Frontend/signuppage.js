async function signUp() {
    const firstName = document.getElementById("signup-firstname").value;
    const lastName = document.getElementById("signup-lastname").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
        const response = await fetch("http://localhost:4003/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ First_name: firstName, Last_name: lastName, email, password }),
        });

        const result = await response.json();

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