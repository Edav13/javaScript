var ejecutar;

function comenzar(){
    ejecutar = setTimeout(function() {
        document.write('Esta es una prueba<br>');
    }, 3000);
}

function detenerse() {
    clearTimeout(ejecutar);
}