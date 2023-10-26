const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// Función para obtener y mostrar la fecha actual
function mostrarFecha() {
    var fecha = new Date();
    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    var fechaActual = document.getElementById("fechaActual");
    fechaActual.textContent = fechaFormateada;
}

// Llama a la función para mostrar la fecha actual cuando se carga la página
window.onload = mostrarFecha;