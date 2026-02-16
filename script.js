// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop page refresh

        // Capture form values
        const name = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="Email Address"]').value;
        const address = form.querySelector('input[placeholder="Physical Address"]').value;
        const contact = form.querySelector('input[placeholder="Contact Number"]').value;
        const message = form.querySelector('textarea').value;

        // Simple validation check
        if (!name || !email || !address || !contact || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Display success message
        alert("Thank you, " + name + "! Your message has been received.");

        // Clear the form
        form.reset();
       const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function () {
    document.body.classList.toggle("light");
});

});

    });

});
