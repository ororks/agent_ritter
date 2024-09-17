// Animation pour afficher le texte progressivement comme dans un terminal
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.text');
    const textContent = textElement.innerHTML;
    textElement.innerHTML = '';
    
    let index = 0;
    
    function typeText() {
        if (index < textContent.length) {
            textElement.innerHTML += textContent.charAt(index);
            index++;
            setTimeout(typeText, 50); // Vitesse d'apparition des lettres
        }
    }

    typeText();  // Démarrer l'animation du texte
});
