// HUB FRAMES FILTERED FUNCTION
// TUBE FRAMES FILTERED FUNCTION

export default function CreateFrameHub(onlyImagesVideos, containerLocalLinksUser, statusNewConteo, pagePlus, pageLess) {
    containerLocalLinksUser.innerHTML = '';
    containerLocalLinksUser.className = 'displayHubFrames';
    // NEW ARRAY VIDEOS
    let arrayFrames = [];
    // YA TU SABE
    let framesHubFiltered = onlyImagesVideos.filter(H => H.includes('pornhub'));
    framesHubFiltered.forEach(arrHub => arrayFrames.push(arrHub));
    // YOUTUBE VIDEOS
    let framesTubeFiltered = onlyImagesVideos.filter(Y => Y.includes('youtube' && 'youtu.be'));
    framesTubeFiltered.forEach(arrTube => arrayFrames.push(arrTube))
    //console.log(arrayFrames);
    // PAGINACION
    let itemsForPage = 9;
    let page = pagePlus || 0;
    let beginig = page * itemsForPage;
    let end = beginig + itemsForPage;
    let linksPagination = arrayFrames.slice(beginig, end);
    //
    // CONFIGURACION PARA CADA LINK
    linksPagination.forEach(HubUrl => {
        if (HubUrl.includes('pornhub')) {
            let newFrames = new URL(HubUrl);
            let canvaHub = `https://${newFrames.hostname}/embed/${newFrames.searchParams.get('viewkey')}`;
            //console.log(canvaHub);
            const hubBox = document.createElement('div');
            hubBox.className = 'hubBox';
            hubBox.innerHTML = `<iframe src="${canvaHub}" allowFullScreen class="framedHub"></iframe>`;
            containerLocalLinksUser.appendChild(hubBox);
        } else if (HubUrl.includes('youtube')) {
            let newFrames = new URL(HubUrl);
            console.log(newFrames);
            let canvaHub = `https://${newFrames.hostname}/embed/${newFrames.searchParams.get('v')}`;
            //console.log(canvaHub);
            const hubBox = document.createElement('div');
            hubBox.className = 'hubBox';
            hubBox.innerHTML = `<iframe src="${canvaHub}" allowFullScreen class="framedHub"></iframe>`;
            containerLocalLinksUser.appendChild(hubBox);
        } else if (HubUrl.includes('youtu.be')) {
            let newDotTube = new URL(HubUrl);
            console.log(newDotTube)
            let canvaHub = `https://www.youtube.com/embed${newDotTube.pathname}`;
            //console.log(canvaHub);
            const hubBox = document.createElement('div');
            hubBox.className = 'hubBox';
            hubBox.innerHTML = `<iframe src="${canvaHub}" allowFullScreen class="framedHub"></iframe>`;
            containerLocalLinksUser.appendChild(hubBox);
        }
    });

    // CONTEO 
    statusNewConteo.textContent = 'Elementos disponibles:' + (framesHubFiltered.length + framesTubeFiltered.length);
    // BOTON DE PAGINACION
    // THIS FUNCTION WORKS BECAUSE I WAS LISTENING "JMSN - LOVE ME [TIKTOK VERSION]"
    const containerNextPast = document.createElement('div');
    const nextPage = document.createElement('button');
    const pastPage = document.createElement('button');
    containerNextPast.className = 'containerNextPast';
    nextPage.className = 'nextPage';
    pastPage.className = 'pastPage';
    nextPage.textContent = '>';
    pastPage.textContent = '<';
    containerNextPast.appendChild(pastPage);
    containerNextPast.appendChild(nextPage);
    containerLocalLinksUser.appendChild(containerNextPast);
    nextPage.addEventListener('click', () => {
        let pagePlus = page + 1;
        containerLocalLinksUser.innerHTML = '';
        window.location.href = '#';
        CreateFrameHub(onlyImagesVideos,containerLocalLinksUser, statusNewConteo, pagePlus);
        return pagePlus;
    });
    pastPage.addEventListener('click', () => {
        let pageLess = page - 1;
        containerLocalLinksUser.innerHTML = '';
        window.location.href = '#';
        CreateFrameHub(onlyImagesVideos, containerLocalLinksUser, statusNewConteo, pageLess);
        return pageLess;
    });
}