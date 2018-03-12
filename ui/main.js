console.log('Loaded!');
var element = document.getElementById('madi');

var pos = 0;

function moveright(){
    pos = pos + 2;
    element.style.marginLeft = pos + 'px';
}
element.onclick = function(){
    var interval = setInterval(moveright,100);
}