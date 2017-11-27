var d = new Date();
var e = document.getElementById('info');
e.innerHTML = d.toString();
e.innerHTML += '<br>' + d.getTime();
e.innerHTML += '<br>' + d.getDate();
e.innerHTML += '<br>' + d.getDay();
e.innerHTML += '<br>' + d.getMonth();
e.innerHTML += '<br>' + d.getFullYear();



