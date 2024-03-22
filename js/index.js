//ouvre/ferme les balises de FAQ
function openFaq(answoriId, plusButtonId) {
    const answer = document.querySelector(`#${answoriId}`);
    const container = answer.parentElement;
    const maxHeight = answer.scrollHeight; // permet de récupérer la hauteur de la réponse dans son état initial
    const plusButton = document.querySelector(`#${plusButtonId}`);

    if (answer.style.height === '0px' || answer.style.height === '') {
        answer.style.height = `${maxHeight}px`;
        plusButton.style.transform = 'rotate(45deg)';
        container.style.boxShadow = '0px 1px 4px 0px rgba(78, 159, 255, 0.20)';
    } else {
        answer.style.height = '0';
        plusButton.style.transform = 'rotate(0deg)';
        container.style.boxShadow = '0px 0.5px 2px 0px rgba(25, 33, 61, 0.10)';
    }
}