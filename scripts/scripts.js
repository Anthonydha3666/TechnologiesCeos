window.addEventListener("load", function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});


// Obtener el pop-up
const contactPopup = document.getElementById("contactPopup");

// Obtener el botón que abre el pop-up
const contactBtn = document.getElementById("contactBtn");

// Obtener el elemento <span> que cierra el pop-up
const span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el pop-up 
contactBtn.onclick = () => {
    contactPopup.style.display = "flex";
}

// Cuando el usuario haga clic en <span> (x), cerrar el pop-up
span.onclick = () => {
    contactPopup.style.display = "none";
}









document.getElementById('contactBtn').addEventListener('click', () => { 
    console.log("sdasd")
});







