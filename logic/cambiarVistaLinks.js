import CreateFrameHub from "./linksFiltered.js";

const LinkView = document.getElementById('extraBtn');
const containerLocalLinksUser = document.querySelector('.container-local-links-user');
const containerLocalLinksInstagram = document.querySelector('.container-local-links-instagram');
const statusNewConteo = document.getElementById('statusConteo');
const hubClick = document.getElementById('PHBtn');

hubClick.addEventListener('click', () => {
    containerLocalLinksInstagram.innerHTML = '';
    let framedHub = JSON.parse(localStorage.getItem('LinksGuardados'));
    CreateFrameHub(framedHub, containerLocalLinksUser, statusNewConteo);
})

LinkView.addEventListener('click', () => {
    // LIMPIEZA
    containerLocalLinksUser.innerHTML = '';
    containerLocalLinksInstagram.innerHTML = '';
    containerLocalLinksUser.className = 'newContainerDisplay';
    // DATOS
    let onlyImagesVideos = JSON.parse(localStorage.getItem('LinksGuardados'));
    // FILTRAR IMAGENES
    let imagenesLinksFiltered = onlyImagesVideos.filter(I => I.endsWith('.jpg') || I.endsWith('.png') || I.endsWith('.jpeg'));
    let imagesConteo = imagenesLinksFiltered.length;
    imagenesLinksFiltered.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.className = 'imagenElement';
        imagenElement.src = imagen;
        imagenElement.loading = 'lazy';
        containerLocalLinksUser.appendChild(imagenElement);
    });
    // CONTEO DE NUEVOS ELEMENTOS
    let conteoLinksNuevos = imagesConteo;
    statusNewConteo.textContent = `Elementos Disponibles: ${conteoLinksNuevos}`;

});