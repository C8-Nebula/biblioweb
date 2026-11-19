const USUARIO_VALIDO = "admin@biblioweb.test";
const CLAVE_VALIDA = "Admin123";

const formulario = document.getElementById("formulario-login");
const mensajeError = document.getElementById("mensaje-error");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const correo = document.getElementById("correo");
  const clave = document.getElementById("clave");
  correo.removeAttribute("aria-invalid");
  clave.removeAttribute("aria-invalid");

  if (!correo.value.trim() || !clave.value.trim()) {
    mensajeError.textContent = "Completa el correo y la contraseña";
    mensajeError.classList.remove("d-none");
    const campoVacio = !correo.value.trim() ? correo : clave;
    campoVacio.setAttribute("aria-invalid", "true");
    campoVacio.focus();
    return;
  }

  if (correo.value.trim() === USUARIO_VALIDO && clave.value === CLAVE_VALIDA) {
    sessionStorage.setItem("sesionActiva", "true");
    window.location.href = "admin.html";
  } else {
    mensajeError.textContent = "Correo o contraseña incorrectos";
    mensajeError.classList.remove("d-none");
    correo.setAttribute("aria-invalid", "true");
    clave.setAttribute("aria-invalid", "true");
  }
});
