// contactentreprise.js
$(document).ready(function () {
    $('#entrepriseForm').submit(function (e) {
        e.preventDefault();
        var formData = {
            societe: $('#societe').val(),
            poste: $('#poste').val(),
            prenom: $('#prenom').val(),
            nom: $('#nom').val(),
            telephone: $('#telephone').val(),
            email: $('#email').val(),
            type_offre: $('#type-offre').val(),
            lieu: $('#lieu').val(),
            descriptif: $('#descriptif').val(),
            consentement: $('#consentement').prop('checked') ? "Oui" : "Non"
        };

        $.ajax({
            url: '../php/contactEntreprise.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Formulaire envoyé avec succès!',
                    text: 'Nous vous répondrons dès que possible.',
                    background: 'white',
                    confirmButtonColor: '#107717',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'my-swal-title',
                        content: 'my-swal-content',
                        confirmButton: 'my-swal-confirm-button',
                    },
                });
                $('#entrepriseForm')[0].reset();
            },
            error: function (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur lors de l\'envoi du formulaire',
                    text: 'Veuillez réessayer plus tard.',
                    background: 'white',
                    confirmButtonColor: '#107717',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'my-swal-title',
                        content: 'my-swal-content',
                        confirmButton: 'my-swal-confirm-button',
                    },
                });
            }
        });
    });
});
