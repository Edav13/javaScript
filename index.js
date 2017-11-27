var ejecutar;
var cont = 0;

function comenzar(){
    ejecutar = setInterval(function() {
        document.write('Esta es una prueba<br>');
        cont++;
        if(cont == 6) {
            clearInterval(ejecutar)
        }
    }, 3000);
}
comenzar();
