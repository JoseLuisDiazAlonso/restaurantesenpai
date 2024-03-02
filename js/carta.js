
/**Vamos a dar función a los botones más y menos y a que actualice la cesta y la cantidad de productos seleccionados. */

// Array para almacenar los productos seleccionados
var productosSeleccionados = [];

// Función para actualizar el contador de la cesta
function actualizarContadorCesta() {
    var cestaContador = document.getElementById("cestaContador");
    cestaContador.textContent = productosSeleccionados.length;
}

// Obtener todos los botones "más" y "menos"
var botonesMas = document.querySelectorAll(".mas");
var botonesMenos = document.querySelectorAll(".menos");

botonesMas.forEach(function (botonMas, index) {
    botonMas.addEventListener("click", function () {
        var cantidadProducto = document.querySelectorAll(".cantidad_Producto")[index];
        var precioProducto = document.querySelectorAll(".precio")[index];
        var tipoProducto = document.querySelectorAll(".productoSeleccionado")[index].textContent;

        // Obtener la cantidad actual del producto
        var cantidadActual = parseInt(cantidadProducto.textContent);

        // Incrementar la cantidad
        cantidadActual++;

        // Actualizar la cantidad en el HTML
        cantidadProducto.textContent = cantidadActual;

        // Verificar si el producto ya existe en la lista
        var productoExistente = productosSeleccionados.find(function (producto) {
            return producto.tipo === tipoProducto;
        });

        if (productoExistente) {
            // Si el producto ya existe, actualizar solo la cantidad
            productoExistente.cantidad = cantidadActual;
        } else {
            // Si el producto no existe, agregarlo a la lista
            var productoSeleccionado = {
                cantidad: cantidadActual,
                precio: precioProducto.textContent,
                tipo: tipoProducto
            };
            productosSeleccionados.push(productoSeleccionado);
        }

        //Guardamos la información del array en el local storage.
        localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados));

        // Actualizar el contador de la cesta
        actualizarContadorCesta();
    });
});


botonesMenos.forEach(function (botonMenos, index) {
    botonMenos.addEventListener("click", function () {
        var cantidadProducto = document.querySelectorAll(".cantidad_Producto")[index];

        // Obtener la cantidad actual del producto
        var cantidadActual = parseInt(cantidadProducto.textContent);

        // Verificar que la cantidad no sea menor a 0
        if (cantidadActual > 0) {
            // Decrementar la cantidad
            cantidadActual--;

            // Actualizar la cantidad en el HTML
            cantidadProducto.textContent = cantidadActual;

            // Eliminar el último producto seleccionado del array
            productosSeleccionados.pop();

            //Guardamos la información del array en el local storage.
            localStorage.setItem("productosSeleccionados", JSON.stringify(productosSeleccionados));

            // Actualizar el contador de la cesta
            actualizarContadorCesta();
        }
    });
});

/**Recuperamos los elementos del localStorage al cargar la página.
 * Así no se perderá la información al recargar o al pasar de páginas.
 */
window.addEventListener("load", function () {
    var productosGuardados = localStorage.getItem("productosSeleccionados");
    if (productosGuardados) {
        productosSeleccionados = JSON.parse(productosGuardados);
        // Actualizar la cantidad en el HTML y el contador de la cesta
        productosSeleccionados.forEach(function (producto, index) {
            var cantidadProducto = document.querySelectorAll(".cantidad_Producto")[index];
            cantidadProducto.textContent = producto.cantidad;
        });
        actualizarContadorCesta();
    }
});
