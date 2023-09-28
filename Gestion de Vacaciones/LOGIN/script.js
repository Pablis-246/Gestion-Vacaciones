document.addEventListener("DOMContentLoaded", function() {
    const dniForm = document.querySelector(".input-dni");
    const passwForm = document.querySelector(".input-contraseña");
    const submitBtn = document.querySelector(".btn-aceptar");
    const loginForm = document.querySelector("#login-form");
    const errorMessage = document.querySelector("#error-message");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const dni = dniForm.value;
        const password = passwForm.value;

        // Comprueba si el usuario y la contraseña son válidos
        if (dni === "123" && password === "123") {
            // En lugar de loginForm.submit(), puedes desencadenar el envío del formulario directamente
           window.location.href = "../EMPLEADO/index.html";

        } else {
          errorMessage.textContent = "DNI o contraseña incorrectos";
          errorMessage.style.color = "red";
        }
    });
});
