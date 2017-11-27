var verImage = true;
function miFuncion() {
    var e = document.getElementById('foto');
    if(verImage){
        e.src = 'img/squirrel.jpg';
        verImage = false;
    } else {
        e.src = 'img/monkey.jpg';
        verImage = true;
    }
}