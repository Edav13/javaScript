var a = parseInt(prompt('Ingrese un valor: '));
var b = parseInt(prompt('Ingrese un valor: '));
var op = prompt('Ingrese un operador');

switch(op) {
    case '+':
    document.write('la suma es: ', a + b)
    break;
    case '-':
    document.write('la resta es: ', a - b)
    break;
    case '*':
    document.write('la multiplicacion es: ', a * b)
    break;
    case '/':
    document.write('la Division es: ', a / b)
    break;
    default:
    document.write('Operador Invalido')
    break;
}
