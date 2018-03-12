console.log('Loaded!');
var img = document.getElementById('madi');

var pos = 0;

function moveright(){
    pos += 2;
    img.style.marginLeft = pos + 'px';
}

var id = setInterval(100,moveright);