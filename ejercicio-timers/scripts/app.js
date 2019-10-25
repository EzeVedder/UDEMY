
window.addEventListener('load', function () {

    console.log('JS cargado.');

    // timers

    // var tiempo = setInterval(function () {

    //     console.log('Set Interval ejecutado');

    //     var titulo = document.getElementById('titulo');

    //     if (titulo.style.fontSize == "100px") {
    //         titulo.style.fontSize = "20px";
    //     } else {
    //         titulo.style.fontSize = "100px";
            
    //     }
    // }, 3000);


    var tiempo = setTimeout(function () {

        console.log('Set Interval ejecutado');

        var titulo = document.getElementById('titulo');

        if (titulo.style.fontSize == "100px") {
            titulo.style.fontSize = "20px";
        } else {
            titulo.style.fontSize = "100px";
            
        }
    }, 3000);










});


// (function(){

//     console.log('Funcion autoejecutable');

// }())