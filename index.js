var a = 10;
var b = 6;
var c = 15;
if(a > 5) {
    document.write('La variable es mayor a 5<br/>');
} else {
    document.write('La variable no es mayor a 5<br/>');
}

if(a > b && a > c) {
    document.write('El numero mayor es: '+ a +'<br/>');
} else if(b > a && b > c) {
    document.write('El numero mayor es: '+ b +'<br/>');
} else {
    document.write('El numero mayor es: '+ c +'<br/>');
}