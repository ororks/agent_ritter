// Animation du texte "Agent Ritter..." suivi du curseur clignotant
document.addEventListener("DOMContentLoaded", function() {
    let agentRitterText = document.getElementById("agent-ritter");
    let enigmeSection = document.getElementById("enigme-section");
    let cursor = document.getElementById("cursor");

    // Attendre l'appui sur Entrée pour révéler l'énigme
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            cursor.style.display = "none";
            agentRitterText.style.display = "none";
            enigmeSection.style.display = "block";
        }
    });

    // Gestion de la réponse à l'énigme
    document.getElementById("valider").addEventListener("click", function() {
        let reponse = document.getElementById("reponse").value.toLowerCase();
        let resultat = document.getElementById("resultat");

        // Vérification de la réponse
        if (reponse === "un nuage") {
            resultat.innerHTML = "Bravo ! Vous avez trouvé la bonne réponse.";
            resultat.style.color = "#33ff33"; // Réponse correcte en vert
        } else {
            resultat.innerHTML = "Désolé, ce n'est pas la bonne réponse.";
            resultat.style.color = "white"; // Réponse incorrecte en blanc
        }
    });
});
