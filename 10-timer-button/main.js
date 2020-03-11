var button=document.getElementsByTagName('input')[0]
var i=6;
var timer=setInterval(() => {
  i--;
  if(i==0){
    clearInterval(timer);
    button.value="同意";
    button.removeAttribute('disabled')
  }
  else{
    button.value="同意（"+i+"s)"
  }
},1000);
button.onclick=function(){
  alert("同意")
}