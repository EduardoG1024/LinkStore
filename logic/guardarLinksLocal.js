// ARRAY DE LINKS
let links = JSON.parse(localStorage.getItem('LinksGuardados')) || [];

const saveUserLink = document.getElementById('saveUserLink');
const statusLink = document.getElementById('statusLink');

function GuardarLinksLocal() {
    let userLink = document.getElementById('userLink').value.trim();
    // MANEJO DE ERRORES
    if (userLink && userLink.includes('http')) {
        if (!links.includes(userLink) ) {
            links.unshift(userLink);
            localStorage.setItem('LinksGuardados', JSON.stringify(links));
            statusLink.textContent = 'Link Guardado Exitosamente';
        } else if (links.includes(userLink)) {
            statusLink.textContent = 'Este Link ya Esta Guardado';
        } else {
            statusLink.textContent = 'Ocurrio un error al guardar el link';
        }
    } else {
        statusLink.textContent = 'Ingresa un Link';
    }
}

saveUserLink.addEventListener('click', () => {
    event.preventDefault();
    GuardarLinksLocal();
});