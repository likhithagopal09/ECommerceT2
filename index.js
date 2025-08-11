document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your interest! Checkout feature coming soon.");
    });
});

document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
    this.reset();
});
