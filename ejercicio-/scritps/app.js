
window.addEventListener('load',function(){

    console.log('JS cargado.');

    var tiempo = setInterval(function(){
        document.getElementById('titulo').style.fontSize = "100px";
        console.log('Set Interval ejecutado');
    },3000)



})


// (function(){

//     console.log('Funcion autoejecutable');

// }())