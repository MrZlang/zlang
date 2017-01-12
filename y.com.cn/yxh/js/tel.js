jQuery.preloadImages = function(){
	for(var i = 0; i<arguments.length; i++)
	jQuery("<img>").attr("src", arguments[i]);
}
jQuery.preloadImages("../templets/yxh/images/tel-icooo.png", "../templets/yxh/images/tel-icooo.png", "../templets/yxh/images/tel-ico2oo.png", "../templets/yxh/images/tel-ico2oo.png", "../templets/yxh/images/tel-ico3oo.png", "../templets/yxh/images/tel-ico3oo.png");
/*work*/
$(function(){	
	$(".item6").hover(
		function(){
			var that=this;
			item6Timer=setTimeout(function(){
				$(that).find("div").animate({width:205,height:205,left:0,top:0},300,function(){
					$(that).find("h2").fadeOut(200);
					$(that).find("dl").fadeIn(200);
				});
			},100);
			
			},
		function(){
			var that=this;
			clearTimeout(item6Timer);
			$(that).find("dl").fadeOut(200);
			$(that).find("div").stop().animate({width:0,height:0,left:102,top:102},300);
			$(that).find("h2").fadeIn(200);
			}
		)
});
//友情链接
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
      if (dis == "apply-1") {	//侧栏预约测量
        var tel = $("#orderphone").val().trim();
        var name = $("#ordername").val().trim();
        var oname = document.getElementById("ordername");
        var ophone = document.getElementById("orderphone");
	        if (name.length == 0) {
	             $("#ordername").focus();
	             vediorong.style.display="block";
	   	vediorong2.style.display="none";
	             oname.onclick=function(){
	              vediorong.style.display="none";
	             }
	             return false;
	        }
	        if (!name.length == 0) {
	          vediorong.style.display="none";
	        }
	        if (tel.length == 0) {
	        	$("#orderphone").focus();
	        	vediorong2.style.display="block";
		vediorong.style.display="none";
	        	ophone.onclick=function(){
	          		vediorong2.style.display="none";
	        	}
	       	return false;
	         }
	         if(!isNum(tel) || !isTel(tel)){
	            	$("#orderphone").focus();
	            	vediorong2.style.display="block";
		vediorong.style.display="none";
	             ophone.onclick=function(){
	                      vediorong2.style.display="none";
	             }
	             return false;
	          }
                return true;
	} else if (dis == "apply-2") { 	//详情预约测量
	        var tel = $("#detailsphone").val().trim();
	        var name = $("#detailsname").val().trim();
	        var dname = document.getElementById("detailsname");
	        var dphone = document.getElementById("detailsphone");
	        if (name.length == 0) {
	             $("#detailsname").focus();
	             productxt.style.display="block";
	   	productxt2.style.display="none";
	   	productxt3.style.display="none";
	             dname.onclick=function(){
	              productxt.style.display="none";
	             }
	             return false;
	        }
	        if (!name.length == 0) {
	          productxt.style.display="none";
	        }
	        if (tel.length == 0) {
	        	$("#detailsphone").focus();
	        	productxt2.style.display="block";
		productxt.style.display="none";
		productxt3.style.display="none";
	        	dphone.onclick=function(){
	          		productxt2.style.display="none";
	        	}
	       	return false;
	         }
	         if(!isNum(tel) || !isTel(tel)){
	            	$("#detailsphone").focus();
	            	productxt3.style.display="block";
		productxt.style.display="none";
		productxt2.style.display="none";
	             dphone.onclick=function(){
	                      productxt3.style.display="none";
	             }
	             return false;
	          }
                return true;
	} else if (dis == "apply-3") { 	//定制流程预约测量
	        var tel = $("#processphone").val().trim();
	        var name = $("#processname").val().trim();
	        var pname = document.getElementById("processname");
	        var pphone = document.getElementById("processphone");
	        if (name.length == 0) {
	             $("#processname").focus();
	             processtxt.style.display="block";
	   	processtxt2.style.display="none";
	   	processtxt3.style.display="none";
	             pname.onclick=function(){
	              processtxt.style.display="none";
	             }
	             return false;
	        }
	        if (!name.length == 0) {
	          processtxt.style.display="none";
	        }
	        if (tel.length == 0) {
	        	$("#processphone").focus();
	        	processtxt2.style.display="block";
		processtxt.style.display="none";
		processtxt3.style.display="none";
	        	pphone.onclick=function(){
	          		processtxt2.style.display="none";
	        	}
	       	return false;
	         }
	         if(!isNum(tel) || !isTel(tel)){
	            	$("#processphone").focus();
	            	processtxt3.style.display="block";
		processtxt.style.display="none";
		processtxt2.style.display="none";
	             pphone.onclick=function(){
	                      processtxt3.style.display="none";
	             }
	             return false;
	          }
                return true;
	} else if (dis == "apply-4") { 	//厨房预约通道
	        var tel = $("#kitphone").val().trim();
	        var name = $("#kitname").val().trim();
	        var kname = document.getElementById("kitname");
	        var kphone = document.getElementById("kitphone");
	        if (name.length == 0) {
	             $("#kitname").focus();
	             kit.style.display="block";
	   	kit2.style.display="none";
	   	kit3.style.display="none";
	             kname.onclick=function(){
	              kit.style.display="none";
	             }
	             return false;
	        }
	        if (!name.length == 0) {
	          kit.style.display="none";
	        }
	        if (tel.length == 0) {
	        	$("#kitphone").focus();
	        	kit2.style.display="block";
		kit.style.display="none";
		kit3.style.display="none";
	        	kphone.onclick=function(){
	          		kit2.style.display="none";
	        	}
	       	return false;
	         }
	         if(!isNum(tel) || !isTel(tel)){
	            	$("#kitphone").focus();
	            	kit3.style.display="block";
		kit.style.display="none";
		kit2.style.display="none";
	             kphone.onclick=function(){
	                      kit3.style.display="none";
	             }
	             return false;
	          }
                return true;
	} else if (dis == "apply-5") {
                var tel = $("#botphone").val().trim();
                var name = $("#botname").val().trim();
                if (name.length == 0) {
                    $("#botname").focus();
                    document.getElementById("markname").style.display="block";
                    setTimeout('document.getElementById("markname").style.display="none"', 1000)
                    return false;
                }
                if (tel.length == 0) {
                    $("#botphone").focus();
                    document.getElementById("markphone").style.display="block";
                    setTimeout('document.getElementById("markphone").style.display="none"', 1000)
                    return false;
                }
                if(!isNum(tel) || !isTel(tel)){
                    $("#botphone").focus();
                    document.getElementById("markphone2").style.display="block";
                    setTimeout('document.getElementById("markphone2").style.display="none"', 1000)
                    return false;
                }
                return true;
            } 
}
window.onload = function(){
var nowDate = new Date();
var dateStr = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
if($("#orderdate").length > 0)
	$("#orderdate").val(dateStr);
if($("#detailsdate").length > 0)
	$("#detailsdate").val(dateStr);
if($("#processdate").length > 0)
	$("#processdate").val(dateStr);
if($("#kitdate").length > 0)
	$("#kitdate").val(dateStr);
if($("#botdate").length > 0)
	$("#botdate").val(dateStr);

}
/*console.log('%cby:赵朗','color: red');*/