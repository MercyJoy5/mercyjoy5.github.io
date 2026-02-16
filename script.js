// Show welcome message when page loads
window.addEventListener("load", function () {
    console.log("Portfolio loaded successfully!");
});

// Simple form validation message
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    alert("Thank you for contacting me! I will get back to you soon.");

    this.reset(); // clear form after submission
});

// Smooth scroll for internal links (if added later)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
