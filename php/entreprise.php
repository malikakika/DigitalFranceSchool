<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $societe = htmlspecialchars($_POST['societe']);
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $numTel = htmlspecialchars($_POST['numTel']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ? $_POST['email'] : null;
    $cp = htmlspecialchars($_POST['cp']);
    $message = htmlspecialchars($_POST['message']);

    // Valider l'adresse email
    if (!$email) {
        // Adresse email invalide
        echo "Adresse email invalide";
        exit;
    }

    // Construire le message email
    $subject = "Nouvelle demande de contact d'une Entreprise depuis le site";
    $body = "Société: $societe\n";
    $body .= "Nom: $nom\n";
    $body .= "Prénom: $prenom\n";
    $body .= "Numéro de téléphone: $numTel\n";
    $body .= "Email: $email\n";
    $body .= "Code Postal: $cp\n\n";
    $body .= "Message:\n$message";

    // Envoyer l'email
    $to = "malikachoubri@gmail.com";  // Remplacez ceci par votre propre adresse email
    $headers = "From: $email";

    // Utilisation de la fonction mail pour envoyer l'email avec gestion des erreurs
    if (mail($to, $subject, $body, $headers)) {
        // Réponse de succès
        echo "success";
    } else {
        // Erreur d'envoi de l'email
        echo "Erreur d'envoi de l'email";
    }
} else {
    // Réponse en cas d'accès direct au fichier PHP
    echo "Erreur de soumission du formulaire";
}
?>