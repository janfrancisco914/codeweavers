document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can handle the form data (e.g., send it to a server via AJAX)
    // For now, we'll just show a success message
    document.getElementById('response-message').innerText = 'Thank you for your message, ' + name + '!';
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
