const copyright = document.getElementById('footerCopyRight');

function CopyRight(){
    let year = new Date().getFullYear();
    copyright.innerHTML =`LinkStore©${year} - Datos del Usuario    <br>
                         <strong>TOTALMENTE</strong> en Anomimato <br>
                          `;
}
CopyRight();