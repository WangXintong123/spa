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
  var $btnhide=$('<input type="button" value="点击" />'),
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
  function hide(conf){
    $(cfg.container).append($btnhide);
    $.extend(cfg,conf);
    num = cfg.num;
    $btnhide.click(function(){
      $btnhide.val(cfg.title+'('+cfg.num+'s)');
      $btnhide.attr("disabled","disabled")
      timerr=setInterval(function(){
        num--;
        if(num===0){
            clearInterval(timerr);
            $btnhide.val(cfg.title);
            $btnhide.removeAttr("disabled");
            num=10;
            $btnhide.click(function(){
              alert('就知道你会同意的')
           })
        }else{
            $btnhide.val(cfg.title+'('+num+'s)')
        }
    },1000)
    })
    
  }
   $btn.click(function(){
      alert('就知道你会同意的')
   })
   
   return{
       show:show,
       hide:hide
   }
}())