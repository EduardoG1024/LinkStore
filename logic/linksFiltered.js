// HUB FRAMES FILTERED FUNCTION

export default function CreateFrameHub(onlyImagesVideos, containerLocalLinksUser, statusNewConteo, pagePlus) {
    containerLocalLinksUser.innerHTML = '';
    containerLocalLinksUser.className = 'displayHubFrames';
    let framesHubFiltered = onlyImagesVideos.filter(H => H.includes('pornhub'));
    statusNewConteo.textContent = `Elementos disponibles: ${framesHubFiltered.length}`;
    // PAGINACION
    let itemsForPage = 9;
    let page = pagePlus || 0;
    let beginig = page * itemsForPage;
    let end = beginig + itemsForPage;
    let linksPagination = framesHubFiltered.slice(beginig, end);
    // CONFIGURACION PARA CADA LINK
    linksPagination.forEach(HubUrl => {
        let newFrames = new URL(HubUrl);
        let canvaHub = `https://${newFrames.hostname}/embed/${newFrames.searchParams.get('viewkey')}`;
        //console.log(canvaHub);
        const hubBox = document.createElement('div');
        hubBox.className = 'hubBox';
        hubBox.innerHTML = `<iframe src="${canvaHub}" allowFullScreen class="framedHub"></iframe>`;
        containerLocalLinksUser.appendChild(hubBox);
    });
    // BOTON DE PAGINACION
    // THIS FUNCTION WORKS BECAUSE I WAS LISTENING "JMSN - LOVE ME [TIKTOK VERSION]"
    const nextPage = document.createElement('button');
    const pastPage = document.createElement('button');
    nextPage.className = 'nextPage';
    pastPage.className = 'pastPage';
    nextPage.textContent = 'Siguiente';
    pastPage.textContent = 'Anterior';
    containerLocalLinksUser.appendChild(pastPage);
    containerLocalLinksUser.appendChild(nextPage);
    nextPage.addEventListener('click', () => {
        let pagePlus = page + 1;
        containerLocalLinksUser.innerHTML = '';
        CreateFrameHub(onlyImagesVideos,containerLocalLinksUser, statusNewConteo, pagePlus);
        return pagePlus;
    });
    pastPage.addEventListener('click', () => {
        let pageLess = page - 1;
        containerLocalLinksUser.innerHTML = '';
        CreateFrameHub(onlyImagesVideos, containerLocalLinksUser, statusNewConteo, pageLess);
        return pageLess;
    })
}