var width=document.getElementById('width');
var height=document.getElementById('height');
var butt=document.getElementById('butt');
var zhouchang=document.getElementById('zhouchang');
var mianji=document.getElementById('mianji');
butt.onclick=function(){
  if(!validate('width') || !validate('height'))return
/**button event */
  //get value
  var w=width.value;
  var h=height.value;
  //calculate
  var z=(w*2+h*2).toFixed(2);
  var m=(w*h).toFixed(2);
  //output 
  zhouchang.value=z;
  mianji.value=m;
};

function validate(field){
  var data=document.getElementById(field)
  var name=field+'msg'
  var msg=document.getElementById(name)
 
  if(data.value===""){
    console.log(field+'1')
      msg.innerHTML='不能为空';
      data.select();
      return false;
  }
  if(Number(data.value)<0){
    console.log(field+'2')
      msg.innerHTML='不能为负数';
      data.select();
      return false;
  }
  // if(!new RegExp('/^-?(0![1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/') .test(data.value)){
  //   console.log(field+'3')
  //     msg.innerHTML='必须是数值';
  //     data.select();
  //     return false;
  // }
  msg.innerHTML=""
  return true
}