// EXPORT FUNCTION
// INSTAGRAM REELS & POSTS
const containerLocalLinksInstagram = document.querySelector('.container-local-links-instagram');
const containerLocalLinksUser = document.querySelector('.container-local-links-user');
const statusInstaConteo = document.getElementById('statusConteo');
const instaBtn = document.getElementById('instaBtn');
let instagramReels = JSON.parse(localStorage.getItem('LinksGuardados'));

instaBtn.addEventListener('click', () => {
    containerLocalLinksInstagram.innerHTML='';
    containerLocalLinksUser.innerHTML='';
    instagramLinksFiltered();
});

function instagramLinksFiltered () {
    let instagramLinks = instagramReels.filter(insta => insta.includes('instagram'));
    let instagramLinksLong = instagramLinks.length;
    statusInstaConteo.textContent = `Reels Disponibles: ${instagramLinksLong}`
    instagramLinks.forEach(instaPost => {
        let newInstaLink = instaPost.split('?')[0];
        const blockInstagram = document.createElement('div');
        blockInstagram.className = 'instagramBlock';
        // PLANTILLA POSTS
        blockInstagram.innerHTML = `<blockquote class="instagram-media"
                                    data-instgrm-permalink="${newInstaLink}"
                                    data-instgrm-version="14"></blockquote>`;
        containerLocalLinksInstagram.appendChild(blockInstagram);
    });
    if (window.instgrm) {
    window.instgrm.Embeds.process();
    }
}