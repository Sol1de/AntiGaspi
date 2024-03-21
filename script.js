//ouvre/ferme les balises de FAQ
function openFaq(answoriId, plusButtonId) {
    const answer = document.querySelector(`#${answoriId}`);
    const container = answer.parentElement;
    const maxHeight = answer.scrollHeight; // permet de récupérer la hauteur de la réponse dans son état initial
    const plusButton = document.querySelector(`#${plusButtonId}`);

    if (answer.style.height === '0px' || answer.style.height === '') {
        answer.style.height = `${maxHeight}px`;
        plusButton.style.transform = 'rotate(45deg)';
    } else {
        answer.style.height = '0';
        plusButton.style.transform = 'rotate(0deg)';
    }
}