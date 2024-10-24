document.addEventListener('DOMContentLoaded', function () {
    console.log("Homepage loaded successfully!");

    // Example: Adding click alert to the "Logout" button
    const logoutButton = document.querySelector("a[href$='logout']");
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert("You have logged out successfully.");
    });
});
