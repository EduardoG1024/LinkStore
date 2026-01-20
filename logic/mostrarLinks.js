import { GoToLinkSite } from "./displayImagesLink.js";
import { RemoveLink } from "./displayImagesLink.js";
import DisplayLinkImage from "./displayImagesLink.js";

const containerLocalLinksUser = document.querySelector('.container-local-links-user');
const statusLinksLocal = document.getElementById('statusLinksLocal');

let linksOfUser = JSON.parse(localStorage.getItem('LinksGuardados'));

function MostrarLinks() {
    if (linksOfUser) {
        linksOfUser.map(link => {
            // ELEMENTOS
            const linkBox = document.createElement('div');
            const linkA  = document.createElement('a');
            const containerButtons = document.createElement('div');
            const linkButton = document.createElement('button');
            const linkRemove = document.createElement('button');
            const linkDisplay = document.createElement('button');
            // CLASES
            linkBox.className = 'linkBox';                         // CAJA CADA LINK EN EL ARRAY
            linkA.className = 'linkA';                             // LINK TEXTO
            containerButtons.className = 'container-buttons-link'; // CONTENEDOR DE BOTONES 
            linkButton.className = 'linkButton';                   // BOTON ABRIR LINK
            linkRemove.className = 'linkRemove';                   // BOTON REMOVER LINK
            linkDisplay.className = 'linkDisplay';                 // BOTON PREVIEW LINK
            // VALORES
            linkA.href = link;
            linkA.textContent = link;
            linkButton.textContent = 'Ver Link';
            linkRemove.textContent = 'Borrar Link';
            linkDisplay.textContent = 'Preview';
            // AGREGADO
            linkBox.appendChild(linkA);
            containerButtons.appendChild(linkDisplay);
            containerButtons.appendChild(linkButton);
            containerButtons.appendChild(linkRemove);
            linkBox.appendChild(containerButtons);
            containerLocalLinksUser.appendChild(linkBox);
            // EVENTO MOSTRAR LINK
            // SIN POSIBILIDAD DE ABRIR VIDEOS EN LA MISMA PAGINA
            linkButton.addEventListener('click', () => {
                GoToLinkSite(linkA.href);
            });
            // EVENTO REMOVER LINK
            linkRemove.addEventListener('click', () => {
                RemoveLink(linkA.href, linksOfUser, statusLinksLocal);
            });
            // EVENTO PREVIEW IMAGENES
            linkDisplay.addEventListener('click', () => {
                DisplayLinkImage(linkA.href);
            })
        });
    }
}

function BannerNoLinks() {
    const noDataLinks = document.createElement('p');
    const corte = document.createElement('hr');
    const characterNoData = document.createElement('img');
    noDataLinks.className = 'noDataLinks';
    characterNoData.className = 'characterNoData';
    characterNoData.src = '/assets/images/frieren-02.png';
    noDataLinks.textContent = `Agrega los Links que Quieras!!!`;
    containerLocalLinksUser.appendChild(noDataLinks);
    containerLocalLinksUser.appendChild(corte);
    containerLocalLinksUser.appendChild(characterNoData);
}
MostrarLinks();
BannerNoLinks();