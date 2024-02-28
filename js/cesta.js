//A partir del array productosSeleccionados, mostramos dicha información en la cesta, en el HTML.

// Obtenemos el elemento del HTML donde se mostrará la información de la cesta.
var cesta = document.querySelector(".cesta");

// Obtenemos la información del local storage.

var productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados"));

// Creamos una variable para almacenar el HTML que se mostrará en la cesta.

var htmlCesta = "";

// Recorremos el array productosSeleccionados para obtener la información de cada producto.

if (productosSeleccionados && productosSeleccionados.length > 0) {
  productosSeleccionados.forEach(function (productoSeleccionado) {
    htmlCesta += "<div class='productoCesta'>";
    htmlCesta += "<div class='productoCestaTipo'>" + productoSeleccionado.tipo + "</div>";
    htmlCesta += "<div class='productoCestaCantidad'>" + productoSeleccionado.cantidad + "</div>";
    htmlCesta += "<div class='productoCestaPrecio'>" + productoSeleccionado.precio + "</div>";
    htmlCesta += "</div>";
  });
}

// Actualizar el contador de la cesta

function actualizarContadorCesta() {
  var cestaContador = document.getElementById("cestaContador");
  //Verificamos si el producto seleccionado es null antes de acceder a la propiedad
  if (productosSeleccionados && productosSeleccionados.length) {
    cestaContador.textContent = productosSeleccionados.length;
  } else {
    //si el producto seleccionado es null establece el contador en cero.
    cestaContador.textContent = "0";
  }
}


// Mostramos el HTML en la cesta.

cesta.innerHTML = htmlCesta;

//Actualizamos el contador de la cesta.

actualizarContadorCesta();





// Actualizar el total de la cesta

actualizarTotalCesta();

// Actualizar el total de la cesta

function actualizarTotalCesta() {
  var totalCesta = document.querySelector(".totalCesta");
  var total = 0;

  if (productosSeleccionados && productosSeleccionados.length > 0) {
    productosSeleccionados.forEach(function (productoSeleccionado) {
      total += parseInt(productoSeleccionado.cantidad) * parseFloat(productoSeleccionado.precio);
    });

  }

  totalCesta.textContent = total.toFixed(2) + "€";
}

// Path: js/cesta.js

// Obtener el botón "vaciar cesta"

var botonVaciarCesta = document.querySelector(".vaciarCesta");

// Agregar evento de clic al botón "vaciar cesta"

botonVaciarCesta.addEventListener("click", function () {
  // Limpiar el local storage
  localStorage.clear();

  // Limpiar el array
  productosSeleccionados = [];

  // Actualizar el contador de la cesta
  actualizarContadorCesta();

  // Actualizar el total de la cesta
  actualizarTotalCesta();

  // Actualizar la cesta
  cesta.innerHTML = "";
});

// Path: js/cesta.js

// Obtener el botón "comprar"

var botonComprar = document.querySelector(".comprar");

// Agregar evento de clic al botón "comprar"

botonComprar.addEventListener("click", function () {

  //Creamos una variable para todos los input de los diferentes campos.

  let nombre = document.getElementById('nombre').value;
  let apellidos = document.getElementById('apellidos').value;
  let direccion = document.getElementById('direccion').value;
  let telefono = document.getElementById('telefono').value;


  //Comprobamos que los campos estén cumplimentados.

  if (nombre === '' || apellidos === '' || direccion === '') {
    alert('Todos los campos deben de estar rellenos.');
    return;
  }

  //limpiamos los campos después de pulsar el botón comprar.

  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('direccion').value = '';



  // Crear una variable para almacenar el contenido del mensaje
  var mensaje = "";

  // Recorrer el array productosSeleccionados para obtener la información de cada producto
  if (productosSeleccionados && productosSeleccionados.length > 0) {
    productosSeleccionados.forEach(function (productoSeleccionado) {
      mensaje += "Producto: " + productoSeleccionado.tipo + "\n";
      mensaje += "Cantidad: " + productoSeleccionado.cantidad + "\n";
      mensaje += "Precio: " + productoSeleccionado.precio + "\n\n";
    });
  }

  // Agregar el contenido del mensaje al objeto de datos del correo electrónico
  emailjs.send('service_i3rqf7s', 'template_5xllz1p', {
    from_name: 'Nombre del vendedor',
    to_name: 'Nombre del comprador',
    to_email: 'restaurantesenpai@outlook.com',
    nombre: nombre,
    apellidos: apellidos,
    direccion: direccion,
    telefono: telefono,
    message: mensaje
  }, '_JHDOIA_jHwrIGHUc')
    .then(() => {
      console.log("mensaje enviado")
    })
    .catch((error) => {
      console.log("error al enviar el mensaje", error)



    })




  // Limpiar el local storage
  localStorage.clear();

  // Limpiar el array
  productosSeleccionados = [];

  // Actualizar el contador de la cesta
  actualizarContadorCesta();

  // Actualizar el total de la cesta
  actualizarTotalCesta();

  // Actualizar la cesta
  cesta.innerHTML = "";



  alert("Compra Realizada");
});

botonVaciarCesta.addEventListener("click", function () {
  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('telefono').value = '';

})