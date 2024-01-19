$(document).ready(function () {
    $('#contactEtudiant').submit(function (e) {
        e.preventDefault();

        var formData = {
            prenom: $('#prenom').val(),
            nom: $('#nom').val(),
            email: $('#email').val(),
            telephone: $('#telephone').val(),
            message: $('#message').val(),
            consentement: $('#consentement').prop('checked') ? "Oui" : "Non"
        };

        $.ajax({
            url: '../php/contactEtudiant.php', // Utilisez le chemin correct vers votre script de traitement PHP
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log(response);

                Swal.fire({
                    icon: 'success',
                    title: 'Message envoyé avec succès!',
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

                $('#contactEtudiant')[0].reset();
            },
            error: function (error) {
                console.error(error);

                Swal.fire({
                    icon: 'error',
                    title: 'Erreur lors de l\'envoi du message',
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
