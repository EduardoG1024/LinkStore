// HUB FRAMES FILTERED FUNCTION

export default function CreateFrameHub(onlyImagesVideos, containerLocalLinksUser, statusNewConteo) {
    containerLocalLinksUser.innerHTML = '';
    containerLocalLinksUser.className = 'displayHubFrames';
    let framesHubFiltered = onlyImagesVideos.filter(H => H.includes('pornhub'));
    statusNewConteo.textContent = `Elementos disponibles: ${framesHubFiltered.length}`;
    framesHubFiltered.forEach(HubUrl => {
        let newFrames = new URL(HubUrl);
        console.log(newFrames);
        let canvaHub = `https://${newFrames.hostname}/embed/${newFrames.searchParams.get('viewkey')}`;
        //console.log(canvaHub);
        const hubBox = document.createElement('div');
        hubBox.className = 'hubBox';
        hubBox.innerHTML = `<iframe src="${canvaHub}" allowFullScreen class="framedHub"></iframe>`;
        containerLocalLinksUser.appendChild(hubBox);
    });
}