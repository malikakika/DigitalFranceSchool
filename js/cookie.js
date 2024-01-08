document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cookie.js chargé avec succès.");

    const acceptBtn = document.getElementById("accept-btn");
    const refuseBtn = document.getElementById("refuse-btn");

    if (acceptBtn && refuseBtn) {
        console.log("Bouton accept : ", acceptBtn);
        console.log("Bouton refuse : ", refuseBtn);

        acceptBtn.addEventListener("click", function () {
            console.log("Clic sur le bouton accept.");
            localStorage.setItem("userAcceptedCookies", true);
            window.location.href = "../index.html";
        });

        refuseBtn.addEventListener("click", function () {
            console.log("Clic sur le bouton refuse.");
            alert("Vous avez refusé l'utilisation de cookies. Certaines fonctionnalités du site peuvent ne pas fonctionner correctement.");
            window.location.href = "../index.html";
        });
    } else {
        console.error("Les boutons d'acceptation ou de refus ne sont pas trouvés.");
    }
});
