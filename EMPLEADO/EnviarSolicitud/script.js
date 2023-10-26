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

const form = document.getElementById("vacationForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Puedes procesar los datos del formulario aquí

    // Limpia los campos del formulario
    form.reset();

    // Muestra el mensaje de confirmación
    confirmationMessage.style.display = "block";

    // Puedes agregar un temporizador para ocultar el mensaje después de un tiempo
    setTimeout(function() {
        confirmationMessage.style.display = "none";
    }, 5000); // El mensaje se ocultará después de 5 segundos (5000 milisegundos)
});