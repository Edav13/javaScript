var cliente = 'Henry';
var finalizar = true;

while(finalizar) {
    var nombre = prompt('Ingrese cliente: ');
    if(nombre === cliente){
        document.getElementById('info').innerHTML = 'Cliente ' + nombre + ' fue encontrado.';
        finalizar = !finalizar;
    }
}