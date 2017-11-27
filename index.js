function miFuncion(src) {
    var e = document.getElementById('foto');
    e.src = src;
}

function miFuncion1(button) {
    var e = document.getElementById('foto1');
    if(button.innerHTML === 'calabera'){
        e.src = 'img/calabera.png';    
    }
    if(button.innerHTML === 'squirrel'){
        e.src = 'img/squirrel.jpg';    
    }
    if(button.innerHTML === 'monkey'){
        e.src = 'img/monkey.jpg';    
    }
}