document.addEventListener("DOMContentLoaded", function(event) {

    var contenido = document.querySelector('.content');

    if (contenido) {
        contenido.addEventListener('click', e => {
            if (e.target.tagName == "BUTTON") {
                alert("Buscando");
            }
        });
    }

});