
/**Creamos la función necesaria para cambiar las imágenes de la galería. */

document.addEventListener('DOMContentLoaded', function () {

    var imagenes = document.querySelectorAll('.galeria img');
    var indice = 0;

    function cambiarImagen() {
        imagenes[indice].classList.remove('active');
        indice = (indice + 1) % imagenes.length;
        imagenes[indice].classList.add('active');
    }

    setInterval(cambiarImagen, 4000) //Marcamos el cambio de imagen cada 4 segundos

});

