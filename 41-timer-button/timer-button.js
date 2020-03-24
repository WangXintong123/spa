var $timerButton=(function(){
  var $btn=$('<input type="button" value="同意（6s）" disabled/>'),
      cfg = {
          container:'body',
          num:6,
          title:'同意',
          // onClick:
      },
      num,
      timer;
  $btn.css({
      height:'50px',
      width:'120px'
  })
  function show(conf){
      // 1.DOM draw
      $(cfg.container).append($btn);
      $.extend(cfg,conf);
      num = cfg.num;
      $btn.val(cfg.title+'('+cfg.num+'s)')
      timer=setInterval(function(){
          num--;
          if(num===0){
              clearInterval(timer);
              $btn.val(cfg.title);
              $btn.removeAttr("disabled");
          }else{
              $btn.val(cfg.title+'('+num+'s)')
          }
      },1000)
      // $(conf).append($btn);
      // 2.event bind
  }
   $btn.click(function(){
      alert('就知道你会同意的')
   })
   return{
       show:show
   }
}())