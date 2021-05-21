/* BOTON Volver atrás*/
function goBack() {
  window.history.back();
}

/* quien hay conectado */

if (sessionStorage.getItem('usuarioLogueado') != null) {
  document.getElementById('enlinea').textContent =
    'Estás Logueado Con:' + sessionStorage.getItem('usuarioLogueado');
}
