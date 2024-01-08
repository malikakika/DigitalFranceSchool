<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $societe = $_POST["societe"];
    $poste = $_POST["poste"];
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $telephone = $_POST["telephone"];
    $email = $_POST["email"];
    $type_offre = $_POST["type-offre"];
    $lieu = $_POST["lieu"];
    $descriptif = $_POST["descriptif"];
    $consentement = isset($_POST["consentement"]) ? "Oui" : "Non";

    $to = "votre@email.com";
    $subject = "Nouvelle offre de stage/alternance/contrat";
    $headers = "From: $email";

    $email_content = "Société: $societe\n";
    $email_content .= "Poste visé: $poste\n";
    $email_content .= "Prénom: $prenom\n";
    $email_content .= "Nom: $nom\n";
    $email_content .= "Téléphone: $telephone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Type d'offre: $type_offre\n";
    $email_content .= "Lieu: $lieu\n";
    $email_content .= "Descriptif de l'offre:\n$descriptif\n";
    $email_content .= "Consentement pour être contacté(e): $consentement";

    mail($to, $subject, $email_content, $headers);
}
?>