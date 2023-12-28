//Daremos funcionalidad a los botones mas y menos.

//Seleccionamos los botones mas y menos

const botonMas = document.querySelectorAll(".mas");
const botonMenos = document.querySelectorAll(".menos");

//Manejamos el evento del botón Mas.

botonMas.forEach(botonMas => {
    botonMas.addEventListener("click", () => {

        //Obtenemos el elemento padre "producto".
        const producto = botonMas.closest(".producto");

        //Obtenemos el elemento cantidad del Producto.
        const cantidadProducto = producto.querySelector(".cantidad_Producto");
        //Obtenemos el valor actual de la cantidad de producto.

        let cantidad = parseInt(cantidadProducto.textContent);

        //Incrementamos la cantidad en 1.

        cantidad++;

        //Actualizamos el valor de la cantidad en el DOM.

        cantidadProducto.textContent = cantidad;
    });

});

//Manejamos el evento del botón menos.

botonMenos.forEach(botonMenos => {
    botonMenos.addEventListener("click", () => {
        //Obtenemos el elemento padre "producto".
        const producto = botonMenos.closest(".producto");

        //Obtenemos el elemento cantidad del prodcuto.

        const cantidadProducto = producto.querySelector(".cantidad_Producto");
        
        //Obtenemos el valor actual de la cantidad de producto.

        let cantidad = parseInt(cantidadProducto.textContent);

        //Verificamos que la cantidad no sea menor a 0.

        if (cantidad > 0) {
            //Decrementar la cantidad.
            cantidad--;

            //Actualizamos el valor de la cantidad del DOM.

            cantidadProducto.textContent = cantidad;
        }
    });
});