var range=document.getElementById('range');
var cbox=document.getElementById('cbox');
var sbox=document.getElementById('sbox')
range.onchange=function(){
    cbox.style.opacity=1
    sbox.style.height=range.value+'px';
    sbox.style.width=range.value+'px';
    cbox.style.background="rgb("+(255-range.value)+","+(255-range.value)+","+(255-range.value)+")"
}
