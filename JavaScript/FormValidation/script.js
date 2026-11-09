
document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let mobile = document.getElementById("mobile").value.trim();

    let message = document.getElementById("message");

    // Name validation
    if (name === "") {
        message.innerText = "Name is required!";
        return;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.innerText = "Enter a valid email!";
        return;
    }

    // Password validation
    if (password.length < 8) {
        message.innerText = "Password must be at least 8 characters!";
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match!";
        return;
    }

    // Mobile number validation
    let mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
        message.innerText = "Enter a valid 10-digit mobile number!";
        return;
    }

    message.innerText = "Registration Successful!";
});
