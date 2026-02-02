// MAIN SCRIPT ONLY IMPORT
// NOT EXPORT

import DisplayLinkImage from "./displayImagesLink.js";     // PREVIEW DE LINKS
import { RemoveLink } from "./displayImagesLink.js";       // REMOVER LINK PROPIO
import { getUsedStorage } from "./espacioDisponibleLS.js"; // ESPACIO DISPONIBLE
import { RandomLinkDisplay } from "./linkRandom.js";       // RANDOM LINK

const containerLocalLinksUser = document.querySelector('.container-local-links-user');
const statusLinksLocal = document.getElementById('statusLinksLocal');
const SpaceLinkLocal = document.getElementById('SpaceLinkLocal');

const randomBtn = document.getElementById('randomBtn');

let linksOfUser = JSON.parse(localStorage.getItem('LinksGuardados'));

function MostrarLinks() {
    if (linksOfUser) {
        linksOfUser.forEach(link => {
            // ELEMENTOS
            const linkBox = document.createElement('div');
            const linkA  = document.createElement('a');
            const containerButtons = document.createElement('div');
            const linkRemove = document.createElement('button');
            const linkDisplay = document.createElement('button');
            // CLASES
            linkBox.className = 'linkBox';                         // CAJA CADA LINK EN EL ARRAY
            linkA.className = 'linkA';                             // LINK TEXTO
            containerButtons.className = 'container-buttons-link'; // CONTENEDOR DE BOTONES 
            linkRemove.className = 'linkRemove';                   // BOTON REMOVER LINK
            linkDisplay.className = 'linkDisplay';                 // BOTON PREVIEW LINK
            // VALORES
            linkA.href = link;
            linkA.textContent = link;
            linkRemove.textContent = 'Borrar';
            linkDisplay.textContent = 'Preview';
            // AGREGADO
            linkBox.appendChild(linkA);
            containerButtons.appendChild(linkDisplay);
            containerButtons.appendChild(linkRemove);
            linkBox.appendChild(containerButtons);
            containerLocalLinksUser.appendChild(linkBox);
            // EVENTO REMOVER LINK
            linkRemove.addEventListener('click', () => {
                RemoveLink(linkA.href, linksOfUser, statusLinksLocal);
            });
            // EVENTO PREVIEW IMAGENES
            // SIN POSIBILIDAD DE ABRIR VIDEOS EN LA MISMA PAGINA
            linkDisplay.addEventListener('click', () => {
                DisplayLinkImage(linkA.href);
            });
        });
    }
}
MostrarLinks();
// STORAGE USED
SpaceLinkLocal.addEventListener('click', () => {
    getUsedStorage();
});
// RANDOM BUTTON
randomBtn.addEventListener('click', () => {
    RandomLinkDisplay(containerLocalLinksUser);
});