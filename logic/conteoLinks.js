const statusConteo = document.getElementById('statusConteo');
let linksCount = JSON.parse(localStorage.getItem('LinksGuardados')).length;

statusConteo.textContent = `Links Guardados: ${linksCount}`;