document.addEventListener("DOMContentLoaded", function() {
    const dniForm = document.querySelector(".input-dni");
    const passwForm = document.querySelector(".input-contraseña");
    const submitBtn = document.querySelector(".btn-aceptar");
    const loginForm = document.querySelector("#login-form");
    const errorMessage = document.querySelector("#error-message");

    dniForm.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            passwForm.focus();
        }
    });

    passwForm.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            submitForm(); // Llama a la función para enviar el formulario cuando se presiona "Enter" en el campo de contraseña.
        }
    });

    function submitForm() {
        const dni = dniForm.value;
        const password = passwForm.value;

        // Comprueba si el usuario y la contraseña son válidos
        if (dni === "empleado" && password === "1234") {
            // Redirige a la página correspondiente
            window.location.href = "../EMPLEADO/Calendario/index.html";
        } else if (dni === "rrhh" && password === "5678") {
            window.location.href = "../RRHH/Calendario/index.html";
        } else {
            errorMessage.textContent = "DNI o contraseña incorrectos";
            errorMessage.style.color = "red";
        }
    }
});
