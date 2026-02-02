
export function RandomLinkDisplay(containerLocalLinksUser) {
    containerLocalLinksUser.innerHTML='';
    let linksNumber = JSON.parse(localStorage.getItem('LinksGuardados'));
    let linksNumberFilter = linksNumber.filter(H => H.includes('pornhub'));
    let linkNumbered = linksNumberFilter.length;

    let randomLink = Math.floor(Math.random() * linkNumbered) + 1;
    let knowRandomLink = linksNumberFilter[randomLink];

    let getLink = new URL(knowRandomLink);
    let origin = getLink.hostname;
    let viewKey = getLink.searchParams.get('viewkey');
    let embedLink = `https://${origin}/embed/${viewKey}`;

    // 
    const randomContainer = document.createElement('div');
    randomContainer.className = 'randomContainer';
    randomContainer.innerHTML = `<iframe src="${embedLink}" class="randomFrame" muted allowFullScreen></iframe>`;
    containerLocalLinksUser.appendChild(randomContainer);
}