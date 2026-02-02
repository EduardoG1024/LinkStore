// DESPLIEGUE DE IMAGENES LINKS
const containerLocalLinksUser = document.querySelector('.container-local-links-user');

export default function DisplayLinkImage(linkA) {
    // VERIFICACION DE TERMIACION === IMAGENES
    if (linkA.endsWith('.png') || linkA.endsWith('.jpg') || linkA.endsWith('.jpeg')) {
        const imagenPreview = document.createElement('img');
        imagenPreview.className = 'imagenPreview';
        imagenPreview.src = linkA;
        imagenPreview.loading = 'lazy';
        containerLocalLinksUser.appendChild(imagenPreview);
        imagenPreview.addEventListener('click', () => {
            imagenPreview.remove();
        });
    // VERIFICACION DE TERMINACION === VIDEOS
    } else if (linkA.endsWith('.mp4')) {
        const videoContainer = document.createElement('div');
        const videoPreview = document.createElement('video');
        const videoClose = document.createElement('button');
        // CLASES
        videoContainer.className = 'videoContainer';
        videoPreview.className = 'videoPreview';
        videoClose.className = 'videoClose';
        // ATRIBUTOS VIDEO
        videoPreview.src = linkA;
        videoPreview.play();
        videoPreview.loop = true;
        videoPreview.controls = true;
        videoPreview.muted = true;
        videoClose.textContent = 'Cerrar Video';
        videoContainer.appendChild(videoPreview);
        videoContainer.appendChild(videoClose);
        containerLocalLinksUser.appendChild(videoContainer);
        videoClose.addEventListener('click', () => {
            videoContainer.remove();
            videoPreview.remove();
            videoClose.remove();
        });
    // TERMINACION NO CUMPLE CON LOS REQUISITOS
    } else if (linkA.includes('pornhub')) {
        let newHub = new URL (linkA);
        let hostHub = newHub.hostname;
        let hub = newHub.searchParams.get('viewkey');
        const linkHub = `https://${hostHub}/embed/${hub}`;
        const containerHub = document.createElement('div');
        containerHub.className = 'containerHub';
        containerHub.innerHTML = `<iframe src="${linkHub}" class="frameHub" allowFullScreen muted></iframe><br>
                                  <button class="frameClose">Cerrar</button>`;
        containerLocalLinksUser.appendChild(containerHub);
        document.querySelector('.frameClose').addEventListener('click', () => {
            containerHub.remove();
        });
    } else if (linkA.includes('youtube')) {
        let newHub = new URL (linkA);
        let hostHub = newHub.hostname;
        let hub = newHub.searchParams.get('v');
        const linkHub = `https://${hostHub}/embed/${hub}`;
        const containerHub = document.createElement('div');
        containerHub.className = 'containerHub';
        containerHub.innerHTML = `<iframe src="${linkHub}" class="frameHub" allowFullScreen muted></iframe><br>
                                  <button class="frameClose">Cerrar</button>`;
        containerLocalLinksUser.appendChild(containerHub);
        document.querySelector('.frameClose').addEventListener('click', () => {
            containerHub.remove();
        });
    } else {
        alert('No es Posible Previsualizar Este Archivo');
    }
}

// ELIMINACION DE LINKS
export function RemoveLink(linkA, linksOfUser, statusLinksLocal) {
    let getRemovedLink = linkA;
    console.log(getRemovedLink);
    let newDeletedLinks = linksOfUser.filter(L => L !== getRemovedLink);
    console.log(newDeletedLinks);
    localStorage.setItem('LinksGuardados', JSON.stringify(newDeletedLinks));
    statusLinksLocal.textContent = 'Link Eliminado Recarga la Pagina';
}