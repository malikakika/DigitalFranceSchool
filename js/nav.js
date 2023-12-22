document.querySelectorAll('.navbar-nav .hover').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
        if (window.innerWidth > 1200) {
            this.querySelector('.dropdown-toggle').click();
        }
    });
});

// Désactiver le dropdown lorsque la souris quitte la zone du dropdown
document.querySelectorAll('.navbar-nav .hover .dropdown-menu').forEach(function (el) {
    el.addEventListener('mouseleave', function () {
        if (window.innerWidth > 1200) {
            this.previousElementSibling.classList.remove('show');
        }
    });
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.innerWidth > 1200) {
        if (window.scrollY > 0) {
            navbar.classList.add('bg-dark');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('transparent');
        }
    } else {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('transparent');
    }
});
