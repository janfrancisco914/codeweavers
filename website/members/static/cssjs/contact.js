// Function to validate form inputs
function validateForm() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    let valid = true;

    // Reset previous validation states
    [name, email, phone, message].forEach(input => {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
    });

    // Validate Name
    if (!name.value) {
        name.classList.add('is-invalid');
        valid = false;
    } else {
        name.classList.add('is-valid');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.add('is-valid');
    }

    // Validate Phone
    if (!phone.value) {
        phone.classList.add('is-invalid');
        valid = false;
    } else {
        phone.classList.add('is-valid');
    }

    // Validate Message
    if (!message.value) {
        message.classList.add('is-invalid');
        valid = false;
    } else {
        message.classList.add('is-valid');
    }

    return valid;
}

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
        // Show success message
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
        document.getElementById('submitErrorMessage').classList.add('d-none');
        this.reset(); // Reset form fields
    } else {
        // Show error message
        document.getElementById('submitErrorMessage').classList.remove('d-none');
        document.getElementById('submitSuccessMessage').classList.add('d-none');
    }
});
