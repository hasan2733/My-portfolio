// Function to display a message when the user clicks the mail button
document.addEventListener("DOMContentLoaded", function() {
    const mailButton = document.querySelector(".mail-button");
    mailButton.addEventListener("click", function() {
        alert("Redirecting to your email app to send an email!");
    });
});

