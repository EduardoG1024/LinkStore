const copyright = document.getElementById('footerCopyRight');

function CopyRight(){
    let year = new Date().getFullYear();
    copyright.innerHTML =`LinkStore @ ${year}`;
}
CopyRight();