var n=document.getElementById('pwd')
var o=document.getElementById('out')
var e=document.getElementById('eye')
n.oninput=function(){
  o.value=n.value
}
e.onmouseover=function(){
  o.className="pwd-text2"
}
e.onmouseout=function(){
  o.className="pwd-text"
}