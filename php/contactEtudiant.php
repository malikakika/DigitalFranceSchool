<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $message = $_POST["message"];
    $consentement = isset($_POST["consentement"]) ? "Oui" : "Non";

    $to = "malikachoubri@gmail.com";
    $subject = "Nouveau message de contact - Étudiant";
    $headers = "From: $email";

    $email_content = "Prénom: $prenom\n";
    $email_content .= "Nom: $nom\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $telephone\n";
    $email_content .= "Message:\n$message\n";
    $email_content .= "Consentement pour être contacté(e): $consentement";

    mail($to, $subject, $email_content, $headers);
}
?>