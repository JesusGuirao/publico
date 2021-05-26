// inicializamos al cargar
function ponerModo(opcion) {
  // obtengo el modo que se está aplicando con Jquery y
  // hago los cambios y lo registro en la variable modo
  var modoActual;
  var modoFuturo;

  if (opcion == '') {
    modoActual = $(':root').css('--modo');
  }

  if (modoActual == 'noche') {
    $(':root').css('--color', $(':root').css('--colorDia'));
    $(':root').css('--colorBg', $(':root').css('--colorBgDia'));
    $(':root').css('--modo', 'dia');
    modoActual = 'dia';
    modoFuturo = 'noche';
  } else {
    $(':root').css('--color', $(':root').css('--colorNoche'));
    $(':root').css('--colorBg', $(':root').css('--colorBgNoche'));
    $(':root').css('--modo', 'noche');
    modoActual = 'noche';
    modoFuturo = 'dia';
  }

  $(':root').css('color', $(':root').css('--color'));
  $(':root').css('background-color', $(':root').css('--colorBg'));
  $('#modo').text(modoActual);
  $('#mensajeBoton').text('Cambiar a modo ' + modoFuturo);
}

function cambiar() {
  // obtengo el modo que se está aplicando con Jquery y
  // hago los cambios y lo registro en la variable modo
  if ($(':root').css('--modo') == 'noche') {
    $(':root').css('--color', $(':root').css('--colorDia'));
    $(':root').css('--colorBg', $(':root').css('--colorBgDia'));
    $(':root').css('--modo', 'dia');
    $('#mensajeBoton').text('Cambiar a modo Noche');
  } else {
    $(':root').css('--color', $(':root').css('--colorNoche'));
    $(':root').css('--colorBg', $(':root').css('--colorBgNoche'));
    $(':root').css('--modo', 'noche');
    $('#mensajeBoton').text('Cambiar a modo Dia');
  }

  $(':root').css('color', $(':root').css('--color'));
  $(':root').css('background-color', $(':root').css('--colorBg'));
}

function cambiarJS() {
  // obtengo el modo que se está aplicando
  var bodyStyles = window.getComputedStyle(document.body);

  // hago los cambios y lo registro en la variable modo
  if (bodyStyles.getPropertyValue('--modo') == 'noche') {
    document.body.style.setProperty(
      '--color',
      bodyStyles.getPropertyValue('--colorDia')
    );
    document.body.style.setProperty(
      '--colorBg',
      bodyStyles.getPropertyValue('--colorBgDia')
    );
    document.body.style.setProperty('--modo', 'dia');
    $('#mensajeBoton').text('Cambiar a modo Noche');
  } else {
    document.body.style.setProperty(
      '--color',
      bodyStyles.getPropertyValue('--colorDiaNoche')
    );
    document.body.style.setProperty(
      '--colorBg',
      bodyStyles.getPropertyValue('--colorBgNoche')
    );
    document.body.style.setProperty('--modo', 'noche');
    $('#mensajeBoton').text('Cambiar a modo Dia');
  }
}

/* BOTON Volver atrás*/
function goBack() {
  window.history.back();
}
