const saveLinkBtn = document.getElementById('añadirLink');
const formulario = document.querySelector('form');

saveLinkBtn.addEventListener('click', () => {
    formulario.style.display = 'flex';
});

const quitUserLink = document.getElementById('quitUserLink');

quitUserLink.addEventListener('click', () => {
    formulario.style.display = 'none';
});