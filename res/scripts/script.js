document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-mode");
    }

    prefersDarkScheme.addEventListener("change", function(e) {
        document.body.classList.toggle("dark-mode", e.matches);
    });
});