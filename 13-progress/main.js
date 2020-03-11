var t=document.getElementById("progress")
var n=0;
var c=0;
var b1=document.getElementById("start-button")
var b2=document.getElementById("stop-button")
var b3=document.getElementById("reset-button")
b1.onclick=function(){
  0===n&&(n=window.setInterval(function(){
    t.setAttribute("value",c++)}
    ,100))
  }
b2.onclick=function(){
  window.clearInterval(n);
  n=0
}
b3.onclick=function(){
  t.setAttribute("value",c=0)
}