'use strict'

window.onload = function () {


    console.log(pelicula);

    var caja_peliculas = document.querySelector("#peliculas");
    var indice;
    for (indice in peliculas) {
        var p = document.createElement("p");
        p.append(peliculas[indice].titulo);
        caja_peliculas.append(p);
    }

    var btn_agregar = document.getElementById('btn-add-movie');

    btn_agregar.addEventListener('click', function () {
        var new_peli = agregarPeliculas();
        peliculas.push(new_peli);


        var caja_peliculas = document.querySelector("#peliculas");
        var indice;
        for (indice in peliculas) {
            var p = document.createElement("p");
            p.append(peliculas[indice].titulo);
            caja_peliculas.append(p);
        }

    });

}

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};


var peliculas = [
    { titulo: 'La verdad duele', year: 2016, pais: 'Francia' }, pelicula
]

function agregarPeliculas() {
    var peli = {};
    peli.titulo = prompt('Titulo: ');
    peli.year = parseInt(prompt('Año: '));
    peli.pais = prompt('País: ');

    return peli;
}