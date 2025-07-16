// Archivo de prueba para debuggear el modal
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== INICIO DEBUG MODAL ===');
  
  // Verificar elementos
  const modal = document.getElementById('modal-cita');
  const form = document.getElementById('cita-form');
  const confirmarBtn = document.getElementById('confirmar-cita');
  
  console.log('Modal encontrado:', !!modal);
  console.log('Form encontrado:', !!form);
  console.log('Botón confirmar encontrado:', !!confirmarBtn);
  
  if (modal && form && confirmarBtn) {
    console.log('Todos los elementos encontrados correctamente');
    
    // Test directo del botón
    confirmarBtn.addEventListener('click', function(e) {
      console.log('¡CLICK DETECTADO EN BOTÓN CONFIRMAR!');
      console.log('Tipo de evento:', e.type);
      console.log('Target:', e.target);
      
      e.preventDefault();
      
      // Obtener datos básicos
      const fecha = document.getElementById('fecha-cita').value;
      const hora = document.getElementById('hora-cita').value;
      const servicio = document.getElementById('servicio-cita').value;
      const nombre = document.getElementById('nombre-cita').value;
      
      console.log('Datos:', { fecha, hora, servicio, nombre });
      
      if (fecha && hora && servicio && nombre) {
        console.log('Todos los campos completados - procediendo...');
        alert('¡Funciona! Se abriría WhatsApp con: ' + JSON.stringify({ fecha, hora, servicio, nombre }));
      } else {
        console.log('Campos incompletos');
        alert('Por favor completa todos los campos');
      }
    });
    
    // Test del form submit
    form.addEventListener('submit', function(e) {
      console.log('¡SUBMIT DETECTADO EN FORMULARIO!');
      e.preventDefault();
    });
    
    console.log('Event listeners añadidos correctamente');
  } else {
    console.error('No se encontraron todos los elementos necesarios');
  }
  
  console.log('=== FIN DEBUG MODAL ===');
});
