document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const username = form.querySelector("input[name='username']");
    const password = form.querySelector("input[name='password']");
    const email = form.querySelector("input[name='email']");
    const fullName = form.querySelector("input[name='fullName']");
    const errorContainer = document.createElement("div");

    errorContainer.style.color = "red";
    form.insertBefore(errorContainer, form.firstChild);

    form.addEventListener("submit", (event) => {
        let errors = [];

        // Validate username
        if (username.value.trim().length < 5) {
            errors.push("Username must be at least 5 characters long.");
        }

        // Validate password
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password.value)) {
            errors.push(
                "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
            );
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errors.push("Please enter a valid email address.");
        }

        // Validate full name (optional)
        if (fullName.value.trim().length > 0 && fullName.value.trim().length < 3) {
            errors.push("Full Name must be at least 3 characters long if provided.");
        }

        // Display errors or allow submission
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorContainer.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
        } else {
            errorContainer.innerHTML = ""; // Clear any previous errors
        }
    });
});
