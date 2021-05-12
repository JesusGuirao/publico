if (!sessionStorage.getItem('usuarioLogueado')) {
  // estado 3 de nuestro diagrama de estados - con usuario
  // estamos cargando la página teniendo un usuario logueado previamente
  // y con la sesión activa pues no se ha desconectado aún
  // ocultamos formulario de login y mostramos desconectar
  window.location.href = 'iniciosesion.html';
}

function desconectar() {
  sessionStorage.removeItem('usuarioLogueado');
  sessionStorage.removeItem('usuarioIntentando');
  sessionStorage.removeItem('claveIntentando');
  location.reload();
}
