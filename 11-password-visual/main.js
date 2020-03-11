var n=document.getElementById('pwd')
var o=document.getElementById('out')
var e=document.getElementById('eye')
n.oninput=function(){
  o.value=n.value
}
e.onmouseover=function(){
  console.log(2)
  o.className="pwd-text2"
}
e.onmouseout=function(){
  console.log(3)
  o.className="pwd-text"
}