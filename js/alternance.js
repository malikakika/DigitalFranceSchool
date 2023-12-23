

ScrollReveal().reveal('.scroll-animate-once', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    reset: true,
});







function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour gérer l'animation
function handleScrollAnimation() {
    var animatedElements = document.querySelectorAll('.scroll-animate');

    animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            if (!element.classList.contains('animate')) {
                element.classList.add('animate'); // Ajoutez une classe d'animation si elle n'est pas déjà présente
            }
        } else {
            element.classList.remove('animate'); // Supprimez la classe d'animation si l'élément n'est pas visible
        }
    });
}

// Ajoutez un écouteur d'événements pour gérer l'animation lors du défilement
window.addEventListener('scroll', handleScrollAnimation);

// Déclenchez la vérification de l'animation lors du chargement de la page
document.addEventListener('DOMContentLoaded', handleScrollAnimation);









