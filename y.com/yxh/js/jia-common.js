function Jia(){};

Jia.prototype={
    ini:function(){
        this.navOverOut();
    },

    navOverOut:function(){
		$('.with-sub-nav').each(function(index,ele){
            $(ele)[0].timer=null;
        });
		$('.Jia-nav-2016 li.fst-li').hover(function(){
            if($(this).hasClass('with-sub-nav'))
            {
                $('.Jia-nav-2016 li.fst-li').removeClass('enter-nav');
                $('.with-sub-nav').each(function(index,ele){
                    clearTimeout($(ele)[0].timer);
                });
            }
            $(this).addClass('enter-nav');
        },function(){
            if($(this).hasClass('with-sub-nav'))
            {
                var _this=$(this);
                $(this)[0].timer=setTimeout(function(){
                    _this.removeClass('enter-nav')
                },200)
            }
            else
            {
                $(this).removeClass('enter-nav');
            }
        });
    }

};

var oJia=new Jia();
$(function() {
    oJia.ini();
});


$(function() {

    $(window).scroll(function() {
        if ($(document).scrollTop() > 800) {
            $("#joinMenuBox").addClass("fffff");
        }
        else {
            $("#joinMenuBox").removeClass("fffff");
        }
    });
})
$(function() {

$(window).scroll(function(){
        var top_nav_scroll=$(window).scrollTop();
        if(top_nav_scroll>500){
            $(".tab-title").addClass("fixed_header");
        }else{
            $(".tab-title").removeClass("fixed_header");
        }
    })
})

$(function(){
    var footer_join=$("#footer_join"),
        join_btn=$("#join_btn");
        join_btn.hover(function () {
            footer_join.fadeIn();
        }, function () {
            footer_join.fadeOut();
        });
})

//滚动函数
function scrollToPos(e, distance){
 $('html,body').animate({
	scrollTop:$(e).offset().top - distance}, 500
  );
}

$(function(){

	//到一定区域显示返回顶部
	$(window).scroll(function() {
	  if(parseInt($(document).scrollTop()) > 200)
	  {
		  $(".up-top").fadeIn();
	  }else
	  {
		   $(".up-top").fadeOut();
	  }
})

//开始----------------------------

$(document).ready(function(){

   $(".complain").click(function(){


     $('.suggest,.complain_mask').css('display','block');


    })

$('.suggest .complain_close').click(function(){

	$('.suggest,.complain_mask').css('display','none');
})


})


	//结束------------------------------
})
/*调用底部弹出表单*/

$(function(){

	if($(".fixbottom").length > 0)
	{
		fixBar(".fixbottom", ".fixleft", ".close", -1000);
	}
})

var region = new Object();

region.isAdmin = false;

//滚动到指定元素位置
//e   元素是ID，class
//dis 可变，默认0
//ex  scrollToPos("#mypos", 0)
function scrollToPos(e, dis){
 $('html,body').animate({
	scrollTop:$(e).offset().top - dis}, 500
  );
}

/*//底部固定位置
//e  元素是ID，class
//h  可变，默认0
//ex  fixBar("#mypos", 0)
function fixBar(e, h)
{
	var wheight=$(window).height() + h;
	$(window).scroll(function(){
	   var top=$(window).scrollTop();
	   if(top<wheight){
	   $(e).css("display","block")
	   }
	   if(top<200){
		$(e).css("display","none")
	   }
	});
}*/


//底部固定位置
//e  元素是ID，class
//h  可变，默认0
//ex  fixBar("#mypos","fixleft","close" 0)

//8.11修改开始
function fixBar(e,left,cl, h)
{
	var wheight=$(window).height() - h;
	var isclick=0;
	$(window).scroll(function(){
	   var top=$(window).scrollTop();
	   if(top>wheight && isclick!=1){
	   $(e).css("display","block");
	   }
	  if(top<50){
		$(e).css("display","none")
	   }
	});
	$(cl).click( function(){
		$(e).animate({ width:'toggle'});
		$(left).delay(500).show(1);
		isclick=1;
	});
	$(left).click( function(){
		$(e).animate({ width:'toggle'});
		$(left).hide();
		isclick=0;
	});
}
//8.11修改结束

/*表单提交*/

function isNum(str){
            var reg = /^[0-9_-]+$/;
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
        //弹窗
        function AddOrder(dis) {
            if (dis == "apply-3") {
                var tel = $("#footphone").val().trim();
                var name = $("#footname").val().trim();
                if (name.length == 0) {
                    $("#footname").focus();
                    document.getElementById("foot-name").style.display="block";
                    setTimeout('document.getElementById("foot-name").style.display="none"', 1000)
                    return false;
                }
                if (tel.length == 0) {
                    $("#footphone").focus();
                    document.getElementById("foot-phone").style.display="block";
                    setTimeout('document.getElementById("foot-phone").style.display="none"', 1000)
                    return false;
                }
                if(!isNum(tel) || !isTel(tel)){
                    $("#footphone").focus();
                    document.getElementById("foot-phone-2").style.display="block";
                    setTimeout('document.getElementById("foot-phone-2").style.display="none"', 1000)
                    return false;
                }
                return true;
             //侧栏
            } else if (dis == "apply-4") {
                var tel = $("#signphone").val().trim();
                var name = $("#signname").val().trim();
                var sname = document.getElementById("signname");
                var sphone = document.getElementById("signphone");
                if (name.length == 0) {
                    $("#signname").focus();
                    document.getElementById("sign-name").style.display="block";
		      document.getElementById("sign-phone").style.display="none";
                    document.getElementById("sign-phone-2").style.display="none";
                    sname.onclick=function(){
                      document.getElementById("sign-name").style.display="none";
                    }
                    return false;
                }
                if (!name.length == 0) {
                  document.getElementById("sign-name").style.display="none";
                }
                if (tel.length == 0) {
                    $("#signphone").focus();
                    document.getElementById("sign-phone").style.display="block";
		      document.getElementById("sign-name").style.display="none";
                    document.getElementById("sign-phone-2").style.display="none";
                    sphone.onclick=function(){
                      document.getElementById("sign-phone").style.display="none";
                    }
                    return false;
                }
                if(!isNum(tel) || !isTel(tel)){
                    $("#signphone").focus();
                    document.getElementById("sign-phone-2").style.display="block";
		      document.getElementById("sign-phone").style.display="none";
                    document.getElementById("sign-name").style.display="none";
                    sphone.onclick=function(){
                      document.getElementById("sign-phone-2").style.display="none";
                    }
                    return false;
                }
                return true;
                //招商加盟
            }  else  if (dis == "apply-1") {
		             var tel = $("#applyphone").val().trim();
		             var name = $("#applyname").val().trim();
                           var aname = document.getElementById("applyname");
                           var aphone = document.getElementById("applyphone");
		             if (name.length == 0) {
		                	$("#applyname").focus();
                      document.getElementById("apply-name").style.display="block";
  	               document.getElementById("apply-phone").style.display="none";
                      document.getElementById("apply-phone-2").style.display="none";
                      aname.onclick=function(){
                        document.getElementById("apply-name").style.display="none";
                      }
			                return false;
		                  }
                if (!name.length == 0) {
                        document.getElementById("apply-name").style.display="none";
                      }
		            if (tel.length == 0) {
		                	$("#applyphone").focus();
                      document.getElementById("apply-phone").style.display="block";
                      document.getElementById("apply-name").style.display="none";
                      document.getElementById("apply-phone-2").style.display="none";
                      aphone.onclick=function(){
                        document.getElementById("apply-phone").style.display="none";
                      }
		                	return false;
	                  	}
		           if(!isNum(tel) || !isTel(tel)){
			               $("#applyphone").focus();
                     document.getElementById("apply-phone-2").style.display="block";
                     document.getElementById("apply-phone").style.display="none";
                     document.getElementById("apply-name").style.display="none";
                     aphone.onclick=function(){
                       document.getElementById("apply-phone-2").style.display="none";
                     }
			                  return false;
	                	}
		                    return true;
                            //招商区域
              }  else  if (dis == "apply-2") {
                     var tel = $("#investphone").val().trim();
                     var name = $("#investname").val().trim();
                     var iname = document.getElementById("investname");
                     var iphone = document.getElementById("investphone");
                     if (name.length == 0) {
                            $("#investname").focus();
                      document.getElementById("invest-name").style.display="block";
                      document.getElementById("invest-phone").style.display="none";
                      document.getElementById("invest-phone-2").style.display="none";
                    iname.onclick=function(){
                        document.getElementById("invest-name").style.display="none";
                      }
                            return false;
                          }
                if (!name.length == 0) {
                        document.getElementById("invest-name").style.display="none";
                      }
                    if (tel.length == 0) {
                            $("#investphone").focus();
                      document.getElementById("invest-phone").style.display="block";
                      document.getElementById("invest-name").style.display="none";
                      document.getElementById("invest-phone-2").style.display="none";
                      iphone.onclick=function(){
                        document.getElementById("invest-phone").style.display="none";
                      }
                            return false;
                        }
                   if(!isNum(tel) || !isTel(tel)){
                           $("#investphone").focus();
                     document.getElementById("invest-phone-2").style.display="block";
                     document.getElementById("invest-phone").style.display="none";
                     document.getElementById("invest-name").style.display="none";
                     iphone.onclick=function(){
                       document.getElementById("invest-phone-2").style.display="none";
                     }
                              return false;
                        }
                            return true;
                }   else {
                var tel = $("input[fs='" + dis + "']").val();
                if (tel.length == 0) {
                    $("input[fs='" + dis + "']").focus();
                    alert("请输入您正确的手机号！");
                    return false;
                }
            }
            return true;
        }

        window.onload = function(){
            var nowDate = new Date();
            var dateStr = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
			if($("#signdate").length > 0)
				$("#signdate").val(dateStr);
			if($("#footdate").length > 0)
				$("#footdate").val(dateStr);
			if($("#applydate").length > 0)
				$("#applydate").val(dateStr);
                     if($("#investdate").length > 0)
                            $("#investdate").val(dateStr);
        }
$(function(){
  var slideHeight = 28; // px
  var defHeight = $('#eject').height();
  if(defHeight >= slideHeight){
    $('#eject').css('height' , slideHeight + 'px');
    $('#read-more').append('<a href="#">更多>></a>');
    $('#read-more a').click(function(){
      var curHeight = $('#eject').height();
      if(curHeight == slideHeight){
        $('#eject').animate({
          height: defHeight
        }, "normal");
        $('#read-more a').html('收起>>');
        $('#gradient').fadeOut();
      }else{
        $('#eject').animate({
          height: slideHeight
        }, "normal");
        $('#read-more a').html('更多>>');
        $('#gradient').fadeIn();
      }
      return false;
    });
  }
});