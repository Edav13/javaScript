for(var i = 1; i < 9; i++) {
    if(i == 5) {
        break;
    }
    document.write(i + ' ');
}
document.write('<br> ');

for(var i = 1; i < 9; i++) {
    if(i == 5) {
        continue;
    }
    document.write(i + ' ');
}
