/*调用*/
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
	});
      //分类
	$("#CATEGORY").hover(function(){
	  $(this).find(".cat-box").show();
	},function(){
	  $(this).find(".cat-box").hide();
	})
  	//下拉
  	downMenu();

	//侧栏报名通道
	$(document).ready(function(){
	   $(".complain").click(function(){
	     $('.suggest,.complain_mask').css('display','block');
	    })
	$('.suggest .complain_close').click(function(){
		$('.suggest,.complain_mask').css('display','none');
	})
	})
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
        function AddOrder(dis) {
            if (dis == "apply-3") {
                var tel = $("#footphone").val().trim();
                var name = $("#footname").val().trim();
                if (name.length == 0) {
                    $("#footname").focus();
                    document.getElementById("mark-name").style.display="block";
                    setTimeout('document.getElementById("mark-name").style.display="none"', 1000)
                    return false;
                }
                if (tel.length == 0) {
                    $("#footphone").focus();
                    document.getElementById("mark-phone").style.display="block";
                    setTimeout('document.getElementById("mark-phone").style.display="none"', 1000)
                    return false;
                }
                if(!isNum(tel) || !isTel(tel)){
                    $("#footphone").focus();
                    document.getElementById("mark-phone-2").style.display="block";
                    setTimeout('document.getElementById("mark-phone-2").style.display="none"', 1000)
                    return false;
                }
                return true;
                //底部表单
            } else if (dis == "apply-4") {
                var tel = $("#orderphone").val().trim();
                var name = $("#ordername").val().trim();
                var one = document.getElementById("ordername");
                var two = document.getElementById("orderphone");
                if (name.length == 0) {
                    $("#ordername").focus();
                    document.getElementById("vediorong").style.display="block";
	     document.getElementById("vediorong-2").style.display="none";
                   one.onclick=function(){
                      document.getElementById("vediorong").style.display="none";
                    }
                    return false;
                }
                if (!name.length == 0) {
                  document.getElementById("vediorong").style.display="none";
                }
                if (tel.length == 0) {
                    $("#orderphone").focus();
                    document.getElementById("vediorong-2").style.display="block";
										document.getElementById("vediorong").style.display="none";
                    two.onclick=function(){
                      document.getElementById("vediorong-2").style.display="none";
                    }
                    return false;
                }
                if(!isNum(tel) || !isTel(tel)){
                    $("#orderphone").focus();
                    document.getElementById("vediorong-2").style.display="block";
										document.getElementById("vediorong").style.display="none";
                    two.onclick=function(){
                      document.getElementById("vediorong-2").style.display="none";
                    }
                    return false;
                }
                return true;
	//侧栏预约测量
            } else if (dis == "apply-2") {
             var tel = $("#userphone").val().trim();
             var name = $("#username").val().trim();
             var uname = document.getElementById("username");
             var uphone = document.getElementById("userphone");
             if (name.length == 0) {
               $("#username").focus();
               document.getElementById("message-1").innerText = "请输入您的称呼！";
               uname.onclick=function(){
              document.getElementById("message-1").innerText = " ";
             }
               return false;
             }
             if (!name.length == 0) {
                  document.getElementById("message-1").innerText = " ";
                }
             if (tel.length == 0) {
               $("#userphone").focus();
               document.getElementById("message-2").innerText = "请输入您的手机号！";
               uname.onclick=function(){
              document.getElementById("message-2").innerText = " ";
             }
               return false;
             }
             if (!tel.length == 0) {
                  document.getElementById("message-1").innerText = " ";
                }
             if(!isNum(tel) || !isTel(tel)){
              $("#userphone").focus();
              document.getElementById("message-2").innerText = "请输入正确的手机号！";
               uname.onclick=function(){
              document.getElementById("message-2").innerText = " ";
             }
              return false;
             }
             return true;
	//首页免费设计
	       } else if (dis == "apply-6") {
		         var tel = $("#casephone").val().trim();
		         var name = $("#casename").val().trim();
		         if (name.length == 0) {
			         $("#casename").focus();
			 document.getElementById("case-n").style.display="block";
			 setTimeout('document.getElementById("case-n").style.display="none"', 1000)
			         return false;
		         }
		         if (tel.length == 0) {
			         $("#casephone").focus();
			 document.getElementById("case-p").style.display="block";
			 setTimeout('document.getElementById("case-p").style.display="none"', 1000)
			         return false;
		         }
		         if(!isNum(tel) || !isTel(tel)){
			        $("#casephone").focus();
			document.getElementById("case-p2").style.display="block";
			setTimeout('document.getElementById("case-p2").style.display="none"', 1000)
			        return false;
		         }
		         return true;
		//定制案例免费设计
	       }else if (dis == "apply-8") {
		         var tel = $("#eventphone").val().trim();
		         var name = $("#eventname").val().trim();
		         var ename = document.getElementById("eventname");
                                     var ephone = document.getElementById("eventphone");
		         if (name.length == 0) {
	         $("#eventname").focus();
	        document.getElementById("freedesign-n").style.display="block";
	        document.getElementById("freedesign-p").style.display="none";
	        document.getElementById("freedesign-c").style.display="none";
		ename.onclick=function(){
		document.getElementById("freedesign-n").style.display="none";
		}
		return false;
		}
		if (!name.length == 0) {
		document.getElementById("freedesign-n").style.display="none";
		}
		if (tel.length == 0) {
		$("#eventphone").focus();
		document.getElementById("freedesign-p").style.display="block";
		document.getElementById("freedesign-c").style.display="none";
		ephone.onclick=function(){
		document.getElementById("freedesign-p").style.display="none";
		}
		return false;
		}
		if (!tel.length == 0) {
		document.getElementById("freedesign-p").style.display="none";
		}
		if(!isNum(tel) || !isTel(tel)){
		$("#eventphone").focus();
		document.getElementById("freedesign-c").style.display="block";
		ephone.onclick=function(){
		document.getElementById("freedesign-c").style.display="none";
		}
		return false;
		}
		return true;
		  //0元设计
		}else {
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

if($("#orderdate").length > 0)
	$("#orderdate").val(dateStr);
if($("#footdate").length > 0)
	$("#footdate").val(dateStr);
if($("#userdate").length > 0)
	$("#userdate").val(dateStr);
if($("#eventdate").length > 0)
//if(document.getElementById("eventdate")) //两种判断标签是否存在的方法
	$("#eventdate").val(dateStr);
if($("#casedate").length > 0)
	$("#casedate").val(dateStr);

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
$(function() {
$(window).scroll(function(){
        var right_dom=$(window).scrollTop();
        var right_h=440;//header of height
        var right_bom=$('.footer-box').position().top-right_h-20;
        if(right_dom>right_h && right_dom<right_bom ){
            $(".location-container").css("position","fixed");
        }else if(right_dom>=right_bom){
            $(".location-container").css("position","relative");
        }else{
            $(".location-container").css("position","relative");
        }
     })
})
console.log("%c by:zhaol","color:red");

