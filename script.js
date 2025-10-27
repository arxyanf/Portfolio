// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            
            // Remove the 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Add the 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});
