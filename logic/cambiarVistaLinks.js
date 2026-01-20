import CreateFrameHub from "./linksFiltered.js";

const LinkView = document.getElementById('extraBtn');
const containerLocalLinksUser = document.querySelector('.container-local-links-user');
const statusNewConteo = document.getElementById('statusConteo');
const hubClick = document.getElementById('PHBtn');

hubClick.addEventListener('click', () => {
    let framedHub = JSON.parse(localStorage.getItem('LinksGuardados'));
    CreateFrameHub(framedHub, containerLocalLinksUser, statusNewConteo);
})

LinkView.addEventListener('click', () => {
    // LIMPIEZA
    containerLocalLinksUser.innerHTML = '';
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
    // FILTRAR VIDEOS
    let videoLinksFiltered = onlyImagesVideos.filter(V => V.endsWith('.mp4'));
    let videosConteo = videoLinksFiltered.length;
    videoLinksFiltered.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.className = 'videoElement';
        containerLocalLinksUser.className = 'newContainerDisplay';
        videoElement.src = video;
        videoElement.controls = true;
        videoElement.muted = true;
        videoElement.pause();
        containerLocalLinksUser.appendChild(videoElement);
    });
    // CONTEO DE NUEVOS ELEMENTOS
    let conteoLinksNuevos = imagesConteo + videosConteo;
    statusNewConteo.textContent = `Elementos Disponibles: ${conteoLinksNuevos}`;

});