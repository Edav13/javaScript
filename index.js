var num = parseInt(prompt('Ingrese un valor:'));

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

document.write(num + ' el factorial es: ' + factorial(num))