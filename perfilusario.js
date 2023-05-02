$(document).ready(function() {
  // Cambiar imagen de perfil
  $('#cambiar-imagen').click(function() {
    $('#imagen-perfil').attr('src', 'nueva-imagen.jpg');
  });
  
  // Guardar cambios en datos personales
  $('#form-datos-personales').submit(function(event) {
    event.preventDefault();
    var datosPersonales = $(this).serialize();
    // Hacer petición Ajax para guardar cambios en el servidor
  });
  
  // Cambiar tema
  var temaActual = 'claro';
  $('#cambiar-tema').click(function() {
    if (temaActual == 'claro') {
      $('body').removeClass('claro').addClass('oscuro');
