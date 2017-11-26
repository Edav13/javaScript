//immediately invoked Function Expresion
(function() {
    document.write('yo soy una funcion T_T');
})();

(function(a, b) {
    document.write('<br>La suma es: ', a + b);
})(2, 3);

var mensaje = (function() {
    document.write('<br>yo soy una funcion T_T');
})();

document.write('<br>' + mensaje);
