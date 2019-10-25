
window.addEventListener('load', function () {

    console.log('JS cargado.');

    // timers

    var tiempo = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click',function(){
        console.log('Intervalo detenido.')
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');

    start.addEventListener('click',function(){
        console.log('Has iniciado el intervalo')
        tiempo = intervalo();    
    });



    // var tiempo = setTimeout(function () {

    //     console.log('Set Interval ejecutado');

    //     var titulo = document.getElementById('titulo');

    //     if (titulo.style.fontSize == "100px") {
    //         titulo.style.fontSize = "20px";
    //     } else {
    //         titulo.style.fontSize = "100px";
            
    //     }
    // }, 3000);







});


// (function(){

//     console.log('Funcion autoejecutable');

// }())

function intervalo(){
    var tiempo = setInterval(function () {

    console.log('Set Interval ejecutado');

    var titulo = document.getElementById('titulo');

    if (titulo.style.fontSize == "100px") {
        titulo.style.fontSize = "20px";
    } else {
        titulo.style.fontSize = "100px";
        
    }
}, 3000);
    return tiempo;
}   