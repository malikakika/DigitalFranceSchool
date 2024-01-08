document.addEventListener("DOMContentLoaded", function () {
    // Vérifiez si l'utilisateur a déjà accepté les cookies
    const userAcceptedCookies = localStorage.getItem("userAcceptedCookies");

    // Si l'utilisateur n'a pas encore accepté les cookies, affichez la popup
    if (!userAcceptedCookies) {
        // Afficher la modal Bootstrap
        $('#cookieModal').modal('show');
    }
});

// Optionnel : Ajoutez un gestionnaire d'événements pour enregistrer le consentement lorsque l'utilisateur clique sur le bouton "Accepter"
document.getElementById('accept-btn').addEventListener('click', function () {
    // Enregistrez le consentement dans le stockage local
    localStorage.setItem("userAcceptedCookies", true);
    // Fermez la modal Bootstrap
    $('#cookieModal').modal('hide');
});





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
















ScrollReveal().reveal('.scroll-reveal', {
    distance: '50px',  // Distance de l'effet
    origin: 'bottom',  // Direction de l'effet
    easing: 'ease-in-out', // Style de transition
    reset: true        // Réinitialiser l'animation à chaque fois que l'élément devient visible
});

// Ajouter un délai progressif aux éléments avec la classe .scroll-reveal
var revealElements = document.querySelectorAll('.scroll-reveal');
revealElements.forEach(function (element, index) {
    ScrollReveal().reveal(element, {
        delay: 400 * index  // Ajustez le délai en fonction de la vitesse souhaitée
    });
});

$(document).ready(function () {
    // Sélectionnez l'élément avec l'ID animatedDiv
    var animatedDiv = $("#animatedDivRight");

    // Fonction pour déclencher l'animation et la réinitialiser
    function triggerAnimation() {
        // Retirer la classe d'animation
        animatedDiv.removeClass("animate__fadeInRight");

        // Déclencher la réanimation
        void animatedDiv.width(); // Force une réinitialisation
        animatedDiv.addClass("animate__fadeInRight");
    }

    // Appeler la fonction d'animation lorsque l'élément devient visible dans la fenêtre
    $(window).scroll(function () {
        if (isScrolledIntoView(animatedDivRight)) {
            triggerAnimation();
        }
    });

    // Vérifier si l'élément est visible dans la fenêtre
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
});




