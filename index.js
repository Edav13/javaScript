function miFuncion() {
    var texto;
    var num = document.getElementById('caja').value;
    if(isNaN(num) || num < 1 || num > 8) {
        texto = '<span style="color:red">Input invalido</span>';
    } else {
        texto = '<span style="color:green">Input valido</span>';
    }
    document.getElementById('info').innerHTML = texto;
}