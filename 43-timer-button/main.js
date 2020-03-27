requirejs.config({
    'path':{
        'jquery':'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
})
require(['jquery'],function($){
    $(function(){
        var $btnadd=$('#add')
        var $radio=$('#what')
        console.log(7)
        $btnadd.click(function(){
            require(['timer-button'],function(TimerButton){
                var tb1=new TimerButton()
                if($radio.is(':checked')){
                    tb1.show({
                    num:10,
                    title:"发送验证码",
                    onClick:function(){
                      console.log("点击了定时器按钮")
                    }
                  })
                }else{
                  tb1.hide({
                    num:10,
                    title:"发送验证码",
                    onClick:function(){
                      console.log("点击了定时器按钮")
                    }
                  })
                }
            })
        })
    })
})
