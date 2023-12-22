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




