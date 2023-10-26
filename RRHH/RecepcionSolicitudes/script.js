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

document.addEventListener('DOMContentLoaded', function() {
    var aceptarBtns = document.querySelectorAll(".solicitud-btn-a");
    var rechazarBtns = document.querySelectorAll(".solicitud-btn-r");
    var solicitudes = document.querySelectorAll(".nueva-solicitud");

    // Event listeners para los botones de aceptar y rechazar
    aceptarBtns.forEach(function(aceptarBtn) {
        aceptarBtn.addEventListener('click', function(event) {
            var solicitud = event.target.closest('.nueva-solicitud');
            solicitud.setAttribute('data-estado', 'aceptada');
            solicitud.style.display = 'none'; // Oculta la solicitud
            // También puedes eliminar la solicitud completamente si es necesario: solicitud.remove();
        });
    });

    rechazarBtns.forEach(function(rechazarBtn) {
        rechazarBtn.addEventListener('click', function(event) {
            var solicitud = event.target.closest('.nueva-solicitud');
            solicitud.setAttribute('data-estado', 'rechazada');
            solicitud.style.display = 'none'; // Oculta la solicitud
            // También puedes eliminar la solicitud completamente si es necesario: solicitud.remove();
        });
    });

    // Event listener para los botones de filtrado
    var filtradoBtns = document.querySelectorAll(".selector-button");
    
    filtradoBtns.forEach(function(filtradoBtn) {
        filtradoBtn.addEventListener('click', function(event) {
            var filtro = event.target.innerText.toLowerCase();

            solicitudes.forEach(function(solicitud) {
                var estadoSolicitud = solicitud.getAttribute('data-estado');
                var botones = solicitud.querySelectorAll('.solicitud-btn-a, .solicitud-btn-r');

                if ((filtro === 'aceptadas' && estadoSolicitud === 'aceptada') ||
                    (filtro === 'rechazadas' && estadoSolicitud === 'rechazada')) {
                    solicitud.style.display = 'block';
                    // Ocultar los botones de aceptar y rechazar
                    botones.forEach(function(boton) {
                        boton.style.display = 'none';
                    });
                } else if (filtro === 'nuevas' && estadoSolicitud === 'pendiente') {
                    solicitud.style.display = 'block';
                    // Mostrar los botones de aceptar y rechazar
                    botones.forEach(function(boton) {
                        boton.style.display = 'inline-block';
                    });
                } else {
                    solicitud.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const solicitudButtons = document.querySelectorAll(".solicitud-btn-a, .solicitud-btn-r");
    const successAlert = document.getElementById("success-alert");
    const errorAlert = document.getElementById("error-alert");

    solicitudButtons.forEach(button => {
        button.addEventListener("click", function() {
            const action = button.classList.contains("solicitud-btn-a") ? "aceptada" : "rechazada";
            const solicitud = button.closest(".nueva-solicitud");
            const nombreEmpleado = solicitud.querySelector("p:first-child").textContent;

            if (action === "aceptada") {
                successAlert.style.display = "block";
                errorAlert.style.display = "none";
            } else {
                successAlert.style.display = "none";
                errorAlert.style.display = "block";
            }

            setTimeout(function() {
                successAlert.style.display = "none";
                errorAlert.style.display = "none";
            }, 4000); // Oculta la alerta después de 3 segundos (puedes ajustar el tiempo)
        });
    });
});
