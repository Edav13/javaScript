function validarFormulario() {
    var texto;
    var usuario = document.forms['miForm']['nombre'].value;
    if(usuario == null || usuario == '') {
        texto = '<span style="color:red;">Ingrese su nombre de usuario</span>';
        document.getElementById('info').innerHTML = texto;
        return false;
    } else if(usuario.length < 5) {
        texto = '<span style="color:red;">Usuario debe tener al menos 5 caracteres</span>';
        document.getElementById('info').innerHTML = texto;
        return false;
    }
        return false;
}