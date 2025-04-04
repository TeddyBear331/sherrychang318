document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
