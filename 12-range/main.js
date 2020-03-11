var range=document.getElementById('range')
var age=document.getElementById('age')

range.onchange=function(){
  age.innerHTML=range.value
}
