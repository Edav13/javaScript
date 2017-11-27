var d = new Date();
var e = document.getElementById('info');
e.innerHTML = d.getHours() > 12 ? 12 - d.getHours() : d.getHours()  + ':' + d.getMinutes() + ':' + d.getSeconds();



