/*首页second*/
  $(".M-design").hover(
        function() { //On hover...
                        $(this).find(".M-design-title").stop().animate({ 
                        marginTop: "-70" //Find the span tag and move it up 40 pixels
                     }, 200);
                 },
        function() {//On hover out...
            $(this).find(".M-design-title").stop().animate({
            marginTop: "0" //Move the span back to its original state (0px)
            }, 200);
        }
        );
$(".Brand").hover(
        function() {//On hover...
            $(this).find(".M-design-title").stop().animate({ 
            marginTop: "-70" //Find the span tag and move it up 40 pixels
            }, 200);
        } ,
        function() { //On hover out...
            $(this).find(".M-design-title").stop().animate({
            marginTop: "0" //Move the span back to its original state (0px)
            }, 200);
        }
        );
$(".move").hover(
        function() {//On hover...
            $(this).find(".M-design-title").stop().animate({ 
            marginTop: "-70" //Find the span tag and move it up 40 pixels
            }, 200);
        } ,
        function() { //On hover out...
            $(this).find(".M-design-title").stop().animate({
            marginTop: "0" //Move the span back to its original state (0px)
             }, 200);
            }
        );
 $(".ui").hover(
        function() {    //On hover...
            $(this).find(".M-design-title").stop().animate({ 
            marginTop: "-70" //Find the span tag and move it up 40 pixels
             }, 200);
        } ,
        function() { //On hover out...
            $(this).find(".M-design-title").stop().animate({
            marginTop: "0" //Move the span back to its original state (0px)
                        }, 200);
        }
        );  
$(".ui2").hover(
        function() {    //On hover...
            $(this).find(".M-design-title").stop().animate({ 
            marginTop: "-70" //Find the span tag and move it up 40 pixels
            }, 200);
        } ,
        function() { //On hover out...
            $(this).find(".M-design-title").stop().animate({
            marginTop: "0" //Move the span back to its original state (0px)
            }, 200);
        }
        );
/*案例图片翻动*/
$(function(){
    var aLi = $('#brand .bd-box li');
    var aImg =  $('#brand .bd-box li div.just img');
    var aSpan = $('#brand .bd-box li div.against img');
    var aSpann = $('#brand .bd-box li div.against');
    aLi.each(function(index){
        $(this).mouseover(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aImg.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aSpan.eq(index).show().css({zIndex:3}).animate({
                    left:0,
                    width:355
                },80)
                aSpann.eq(index).show().css({zIndex:4}).animate({
                    left:0,
                    width:355
                },80)
            })
        })
        $(this).mouseout(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aSpan.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,''),
            aSpann.eq(index).css({zIndex:1}).animate({
                left:177.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aImg.eq(index).show().css({zIndex:2}).animate({
                    left:0,
                    width:355
                },80)
            })
        })
    })
})
