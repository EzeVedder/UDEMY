'use strict'
// función para cargar los scripts una vez que la pagina esta completamente cargada.
window.onload = function () {
    // compruebo que se cargo el DOM
    console.log('DOM cargado...');

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function () {
        console.log('Has enviado los datos.');

        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseInt(document.querySelector('#edad').value);



        if (nombre.trim() == null || nombre.trim().length == 0) {
            //alert('El nombre no puede quedar vacío.');
            document.querySelector("#error-nombre").style.display = "inline-block";
            document.querySelector("#error-nombre").innerHTML = 'El nombre no es válido.';
            return false;
        }else{
            document.getElementById("error-nombre").style.display = "none";
        }


        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            document.querySelector("#error-apellidos").style.display = "inline-block";
            document.querySelector("#error-apellidos").innerHTML = 'El apellido no es válido.';
            return false;
        }else{
            document.getElementById("error-apellidos").style.display = "none";
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            document.querySelector("#error-edad").style.display = "inline-block";
            document.querySelector("#error-edad").innerHTML = 'La edad no es válida.';
            return false;
        }else{
            document.getElementById("error-edad").style.display = "none";
        }



        box_dashed.style.display = 'block';

        var datos_usuario = [nombre, apellidos, edad];
        var datos_etiqueta = ['Nombre', 'Apellidos', 'Edad'];
        var indice

        for (indice in datos_usuario) {

            var parrafo = document.createElement('p');
            var etiqueta = datos_etiqueta[indice];
            // debugger
            // console.log(this);
            parrafo.append(etiqueta, ': ', datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

        // parrafo.append(nombre + " ");
        // parrafo.append(apellidos + " ");
        // parrafo.append(edad);

        // box_dashed.append(parrafo);


    });






}

