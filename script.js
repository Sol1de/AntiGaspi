//ouvre les balises de FAQ
function openFaq(id) {
    const answer = document.querySelector(`#${id}`);
    const container = answer.parentElement;
    const maxHeight = answer.scrollHeight; // permet de récupérer la hauteur de la réponse dans son état initial

    if (answer.style.height === '0px' || answer.style.height === '') {
        answer.style.height = `${maxHeight}px`;
    } else {
        answer.style.height = '0';
    }
}