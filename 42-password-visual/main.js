var $passWord=(function(){
  var $div=$('<div>密码： <input id="pwd" type="password" autofocus><div id="eye"></div><input id="out" class="pwd-text"></div>');
  var add=document.getElementById("add");
  var get=document.getElementById("get");
  add.onclick=function(){
    $("#container").append($div)
    get.removeAttribute("disabled")
    var n=document.getElementById('pwd');
    var o=document.getElementById('out');
    var e=document.getElementById('eye');
    n.oninput=function(){
      o.value=n.value
    }
    e.onmouseover=function(){
      o.className="pwd-text2"
    }
    e.onmouseout=function(){
      o.className="pwd-text"
    }
  }
  function getPwd(){
    // get.onclick=function(){
      var n=document.getElementById('pwd');
      alert(n.value)
    // }
  }
  return{
    getPwd:getPwd
  }
}())
