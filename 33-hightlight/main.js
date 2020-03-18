
document.getElementsByTagName('input')[0].onclick=function(){
  var cod=document.createElement("div")
  var pre=document.createElement("pre")
  cod.append(pre);
  var txt=document.getElementsByTagName('textarea')[0]
  if(txt.value !== ''){
    pre.innerHTML=txt.value;
    hljs.highlightBlock(pre);
    document.getElementsByTagName('body')[0].append(cod)
  }
}