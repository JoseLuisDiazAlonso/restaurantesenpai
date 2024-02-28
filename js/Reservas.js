function initMap() {
  const coordenadas = { lat: 40.41413, lng: -3.66984 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 15,
  });

  var maker = new google.maps.Marker({
    position: coordenadas,
    map: map,
    title: 'Ubicacion'
  });
}



/**Ahora llevamos a cabo la validación del formulario. */


let formulario = document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  let nombre = document.getElementById('nombre_reserva').value;
  let apellidos = document.getElementById('apellidos_reserva').value;
  let fecha = document.getElementById('fecha_reserva').value;
  let hora = document.getElementById('hora_reserva').value;
  let adultos = document.getElementById('adultos_reserva').value;
  let ninos = document.getElementById('ninos_reserva').value;
  let comentarios = document.getElementById('comentarios_reservas').value;

  //Comprobamos que los campos obligatorios están cumplimentados.

  if (nombre === '' || apellidos === '' || fecha === '' || hora === '' || adultos === '' || ninos === '') {
    alert("Todos los campos deben de estar completados.");
    return;
  }
  //Comprobamos que los nombres y los apellidos son textos y no contienen números.

  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/ //Es la expresión regular que determina que el nombre y el apellido son texto.

  if (!regex.test(nombre) || !regex.test(apellidos)) {
    alert("Los campos de nombre y apellidos no pueden contener números.");
    return;
  }

  // Agregar el contenido del mensaje al objeto de datos del correo electrónico
  emailjs.send('service_i3rqf7s', 'template_a4ivwvk', {
    from_name: 'Nombre del vendedor',
    to_name: 'Nombre del comprador',
    to_email: 'restaurantesenpai@outlook.com',
    nombre: nombre,
    apellidos: apellidos,
    hora: hora,
    fecha: fecha,
    adultos: adultos,
    ninos: ninos,
    comentarios: comentarios

  }, "_JHDOIA_jHwrIGHUc")
    .then(() => {
      console.log("mensaje enviado")
    })
    .catch((eror) => {
      console.log("error al enviar el mensaje")

    })

  document.getElementById('formulario').reset();

  alert('Mesa Reservada');
});


