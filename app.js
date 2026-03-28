let intentos = 0;

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (!email.endsWith("@sanjose.edu") || pass.length < 4) {
    intentos++;

    if (intentos >= 3) {
      error.innerText = "Cuenta bloqueada temporalmente";
      return;
    }

    error.innerText = "Usuario o contraseña incorrectos";
    return;
  }

  // Guardar sesión
  localStorage.setItem("user", email);

  window.location.href = "dashboard.html";
}

// Verificar sesión al cargar la página
function irAsistencia() {
  window.location.href = "asistencia.html";
}