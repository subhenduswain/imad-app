console.log('Loaded!');
var img = document.getElementById('madi');

var pos = 0;

function moveright(){
    pos += 2;
    img.style.marginLeft = pos + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveright,100);
}