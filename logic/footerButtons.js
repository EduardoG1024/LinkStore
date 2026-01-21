// BORRAR / LIMIPIAR LOCALSTORAGE
const deleteBtn = document.getElementById('deleteEveryLinkLocal');

deleteBtn.addEventListener('click', () => {
    localStorage.clear();
    alert('Todos los Links Han Sido Borrados');
});

// COPIAR / DESCARGAR TODOS LOS LINKS LOCALSTORAGE
//JSON => TEXT
const copyBtn = document.getElementById('CopyEveryLinkLocal');

copyBtn.addEventListener('click', () => {
    let copy = localStorage.getItem('LinksGuardados');
    navigator.clipboard.writeText(copy);
    alert('links copiados');
})