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
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});










// Fonction pour valider et envoyer le formulaire
function validerEtEnvoyerFormulaire() {
    // Récupérer les valeurs des champs
    var societe = $('#societe').val();
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var numTel = $('#numTel').val();
    var email = $('#email').val();
    var cp = $('#cp').val();
    var message = $('#message').val();

    // Valider que les champs obligatoires sont remplis
    if (!societe || !nom || !prenom || !numTel || !email || !cp || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    // Valider l'adresse email avec une expression régulière
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez saisir une adresse e-mail valide.');
        return;
    } else {
        // Si tous les champs sont remplis, envoyer le formulaire
        envoyerFormulaire();
    }
}

// Fonction pour envoyer le formulaire
function envoyerFormulaire() {
    // Récupérer les valeurs des champs ici
    var societe = $('#societe').val();
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var numTel = $('#numTel').val();
    var email = $('#email').val();
    var cp = $('#cp').val();
    var message = $('#message').val();

    // Valider à nouveau que les champs sont remplis (par mesure de précaution)
    if (!societe || !nom || !prenom || !numTel || !email || !cp || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez saisir une adresse e-mail valide.');
        return;
    }



    // Ajoutez ici la logique pour envoyer les informations du formulaire
    alert('Formulaire envoyé avec succès!');
    $('#formulaireRecrutement').modal('hide'); // Ferme le pop-up après l'envoi


    $.post('traitement_formulaire.php', $('#formulaireRecrutement form').serialize())
        .done(function (response) {
            if (response === 'success') {
                // Afficher un message de succès
                alert('Formulaire envoyé avec succès!');
                $('#formulaireRecrutement').modal('hide');
            } else {
                // Afficher un message d'erreur
                alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
            }
        })
        .fail(function () {
            // En cas d'échec de la requête
            alert('Erreur de connexion au serveur.');
        });
}

// Ajoutez un gestionnaire d'événements au bouton d'envoi du formulaire
$('#formulaireRecrutement button.btn-primary').click(validerEtEnvoyerFormulaire);

// Ajoutez un gestionnaire d'événements à tous les boutons avec la classe "btn-recrute"
$('.btn-contact').click(function () {
    $('#formulaireRecrutement').modal('show'); // Affiche le pop-up
});
