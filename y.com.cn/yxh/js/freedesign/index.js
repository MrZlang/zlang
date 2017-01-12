
$(document).ready(function(){
     $(function(){
        var index = 0;
        var direct = 0;
            // 设置高度
            $('.com_page').each(function(index, el) {
            $(this).css('height',$(window).height());
        });

        // 当屏幕尺寸改变时
        $(window).resize(function(event) {
            $('.com_page').each(function(index, el) {
            $(this).css('height',$(window).height());
             });
        });
        // 屏幕滚动方法
        var goto = function(){
            direct=0;
            if(index<0){
                index=0;
                return;
            }
            if(index>6){
                index=6;
                return;
            }
            $("html,body").stop().animate({"scrollTop":$(window).height()*index},300,function(){direct=0; });
             $('.dot_nav li').eq(index).addClass('current').siblings().removeClass('current');
        }

        // 鼠标移上导航滚动
        $('.dot_nav li').hover(function(){
            index = $(this).index();
            
           goto();
           run();
        })

        // 滚轮事件
        var scrollFunc=function(e){ 
            e=e || window.event; 
            if(e.wheelDelta){ direct+= (-e.wheelDelta/120); }

            else if(e.detail){ direct+=e.detail/3 ; } 
            
            if( direct>=4 ){ goto( index++ ) }
            if( direct<=-4 ){ goto( index-- ) }
                run();
            } 
            if( document.addEventListener){ document.addEventListener('DOMMouseScroll',         scrollFunc,false); }
            window.onmousewheel=document.onmousewheel=scrollFunc; 
            
            goto();


        // 图片定位
         $('.p3_left span').eq(0).css({top: 68,left: 0,background: "url(images/freedesign/txt_1.png)"});
         $('.p3_left span').eq(1).css({top:118,left: 20,background: "url(images/freedesign/txt_2.png)"});
         $('.p3_left span').eq(2).css({top:84,left: 160,background: "url(images/freedesign/txt_3.png)"}); 
         $('.p3_left span').eq(3).css({top:43,right:0,background: "url(images/freedesign/txt_4.png)"}); 
         $('.p3_left span').eq(4).css({top:120,right: 40,background: "url(images/freedesign/txt_5.png)"});
         $('.p3_left span').eq(5).css({top:140,left: 140,background: "url(images/freedesign/txt_6.png)"});             
         $('.retruntop').click(function(){
            index=0;
            goto();
         })
        var run = function(){
            // 第一屏动画
            if(index==0){
                $(".diannao").animate({top:"226px",opacity:"1"},800);
                $('.pad').delay(300).animate({left:"160px",opacity:"1"},800);
                $('.mousekey').delay(500).animate({left:274,opacity:"1"},800);
                $('.cup').delay(800).animate({top:410,opacity:"1"},800);
                // 头像出现
                
                var n=1000;
                $('.page_img img:lt(7):odd').each(function(index, el) {
                    $(this).delay(n).fadeIn(600);
                    n+=200;
                });
                $('.page_img img:lt(7):even').each(function(index, el) {
                    $(this).delay(n).fadeIn(600);
                    n+=200;
                });
            }
            // 第二屏动画
            if(index==1){                
                $('.home').fadeIn(1000);
                $(".disigner").delay(300).animate({left:75},1000).animate({width:600},800);
                $('.shejitu').delay(2000).fadeIn(800);
                $('.icon span').eq(0).delay(3000).animate({top:0},800);
                $('.icon span').eq(1).delay(2600).animate({top:134},800);
            }
            // 第三屏动画
            if(index==2){
                $('.p3_left').fadeIn(1000);
                var n=1000;
                $('.p3_left span:odd').each(function(index, el) {
                    $(this).delay(n).fadeIn(600);
                    n+=200;
                });
                $('.p3_left span:even').each(function(index, el) {
                    $(this).delay(n).fadeIn(600);
                    n+=200;
                });
                $(".p3_right").delay(2000).animate({padding:88,opacity:1},800);
            }
            if(index==3){
                $('.p4_img div').eq(0).addClass('current');
                setTimeout(function(){
                    // $('.p4_img div').eq(0).removeClass('current');
                    $('.p4_img div').eq(1).addClass('current');
                    setTimeout(function(){
                        // $('.p4_img div').eq(1).removeClass('current');
                        $('.p4_img div').eq(2).addClass('current');
                    setTimeout(function(){
                        // $('.p4_img div').eq(2).removeClass('current');
                        $('.p4_img div').eq(3).addClass('current');
                    setTimeout(function(){
                        // $('.p4_img div').eq(3).removeClass('current');
                    }, 2000)
                    }, 2000)
                    }, 2000);
                }, 2000);
             
                
            }
            // 第五屏动画
            if(index==4){
                $('.fufnng').delay(3000).fadeIn(1000);
                $(".car").animate({left:285},3000);
            }
            // 第六屏动画
            if(index==5){
                var d = 0;
                setTimeout(function(){
                    $('.p6_img div').eq(0).css({display:'block'}).addClass('fadeIn');
                    
                }, d)
                d+=300;
                setTimeout(function(){
                    $('.p6_img div').eq(1).css({display:'block'}).addClass('fadeIn');
                    
                }, d)
                d+=300;
                setTimeout(function(){
                    $('.p6_img div').eq(2).css({display:'block'}).addClass('fadeIn');
                    
                }, d)
                d+=300;
                setTimeout(function(){
                    $('.p6_img div').eq(3).css({display:'block'}).addClass('fadeIn');
                    
                }, d)
                d+=300;
                setTimeout(function(){
                    $('.p6_img div').eq(4).css({display:'block'}).addClass('fadeIn');
                    
                }, d)
                
            }
        }
                    
        run();    

        // 文字无缝滚动
        // 判断姓名是否为空
        function isNum(str){
             var reg = /^[0-9_-]+$/;
             if(!reg.test(str)){
                 return false;
             }
             return true;
        }
        function isChn(str){ 
            var reg = /^[\u4E00-\u9FA5]+$/; 
            if(!reg.test(str)){ 
        
                return false; 
                }
            return true; 
        }
        function isTel(str){
            var reg = /^1/;
            if(!reg.test(str) || str.length!=11){
                return false;
         }
            return true;
        }
        $("#username0").blur(function(){ 
        if($("#username0").val()=='' || $("#username0").val()=='您的姓名'){
            $("#tx_xingming").addClass("tx_no_ico").show();
            $("#postMsg0").html("亲，姓名不能为空哟！");
            document.getElementById("submit_img").disabled=false;//解锁提交按钮
            return false;
        }
        if($("#username0").val()=="" || !isChn($("#username0").val())){
            $("#postMsg0").html("亲，姓名必须填写中文！");
            
            document.getElementById("submit_img1").disabled=false;//解锁提交按钮
            return false;
        }
        else{
        $("#postMsg0").empty();
        $("#tx_xingming").removeClass("tx_no_ico").show();
        return false;
        }
            } );
        // 判断电话是否为空
        $("#tel0").blur(function(){
        var tel=$('#tel0').val(); 
        if($("#tel0").val()=="" || !isTel($("#tel0").val())){
            $("#postMsg0").html("亲，手机号码填写错误！");
            $("#tx_dianhua").addClass("tx_no_ico").show();
            document.getElementById("submit_img").disabled=false;//解锁提交按钮
            return false;
        }
       
        else{
        $("#postMsg0").empty();
		//报名
	var username = $("#username0").val();
	var tel = $('#tel0').val();
	var province = $('#province0').val();
	var city = $('#city0').val();
	var zhuanti_pages ="liuchengye";
		
        return false;
        }
            } );
	
	
		
});
});
$(document).ready(function() {
    $("a[href*=#page2],a[href*=#page3],a[href*=#page4],a[href*=#page5],a[href*=#page6],a[href*=#page7]").click(function() {
        if (location.pathname.replace(/^\//, ') == this.pathname.replace(/^\//, ') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $("[name=' + this.hash.slice(1) + ']");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $("html,body").animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
});