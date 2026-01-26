const containerLocalLinksUser = document.querySelector('.container-local-links-user');

let linksNumber = JSON.parse(localStorage.getItem('LinksGuardados'));
let linksNumberFilter = linksNumber.filter(H => H.includes('pornhub'));
let linkNumbered = linksNumberFilter.length;

let randomLink = Math.floor(Math.random() * linkNumbered) + 1;
let knowRandomLink = linksNumber[randomLink];
console.log(knowRandomLink);

let getLink = new URL(knowRandomLink);
let origin = getLink.hostname;
let viewKey = getLink.searchParams.get('viewkey');
let embedLink = `https://${origin}/embed/${viewKey}`;

// 
const randomContainer = document.createElement('div');
randomContainer.className = 'randomContainer';
randomContainer.innerHTML = `<iframe src="${embedLink}" class="randomFrame" muted allowFullScreen></iframe>
                             <button class="closeRandomBtn">Cerrar</button>`;
containerLocalLinksUser.appendChild(randomContainer);