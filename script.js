// script.js
document.addEventListener('DOMContentLoaded', () => {
    const animateBtn = document.getElementById('animateBtn');
    const animatedText = document.getElementById('animatedText');

    const text = "Ceci est un texte animé comme sur un vieux terminal...";
    let index = 0;

    animateBtn.addEventListener('click', () => {
        animatedText.textContent = '';
        index = 0;
        animateText();
    });

    function animateText() {
        if (index < text.length) {
            animatedText.textContent += text.charAt(index);
            index++;
            setTimeout(animateText, 100);
        }
    }
});
