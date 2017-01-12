$(document).ready(function() {
	$("#menu1 a").each(function() { //For each list item...
		var linkText = $(this).find("div").html(); //Find the text inside of the a tag
});
	$("#menu1 a").hover(function() {	//On hover...
		$(this).find("p").stop().animate({
			marginTop: "-20" //Find the span tag and move it up 40 pixels
			}, 200);
			} , function() { //On hover out...
				$(this).find("p").stop().animate({
				marginTop: "0" //Move the span back to its original state (0px)
			}, 200);
});
});
/*右侧导航*/
var scrolltotop={
	setting:{
		startline:150, //起始行
		scrollto:0, //滚动到指定位置
		scrollduration:400, //滚动过渡时间
		fadeduration:[500,100] //淡出淡现消失
	},
	controlHTML:'<a href="javascript:;" class="M-menu2 fl" style="width:60px; height:59px; border:0;display=:block;background:url(/templets/yxh/images/menu.png) no-repeat;margin:0px 5px 2px 0px;" /></a><a href="http://www.yixiaohang.com.cn/online/" target="_blank" class="M-menu3 fl"  style="width:60px; height:59px; border:0;display=:block;background:url(/templets/yxh/images/menu2.gif) no-repeat;margin:0px 5px 2px 0px;" ></a><div class="M-menu4 fl complain" style="width:60px; height:59px; border:0;background:url(/templets/yxh/images/design.png) no-repeat;margin:0px 5px 2px 0px;"></div>', //返回顶部按钮
	controlattrs:{offsetx:-122,offsety:40},//返回按钮固定位置
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:1});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({right:'0px'},"slow");
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({right:'-255px'},"slow");
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:1,cursor:"pointer"}).attr({title:""}).appendTo("body");;
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();
/*导航右侧*/
$(function(){	
	$("#iconbar li a").hover(
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split(".png")[0];
			$(this).children("img").attr({src: "" + origen + "o.png"});
			$(this).css("cursor", "pointer");
			$(this).animate({ width: "176px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "show"}, 1);
		}, 
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split("o.")[0];
			$(this).children("img").attr({src: "" + origen + ".png"});	
			$(this).animate({ width: "31px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "hide"}, 1);
		});
	$("#iconbar li").hover(
	function(){
		$(this).addClass("bj");
	},
	function(){
		$(this).removeClass("bj")
	});
});
/*导航*/
$(window).bind("scroll", function() {
	//当滚动条滚动时
	var scroll_top = $(document).scrollTop();
	if (scroll_top == 0){
		$(".M-top").removeClass("M-top-show");
		$(".M-top").animate({top: '0px'}, "slow");
		$(".M-top").css("left", "0px");
	}
	if (scroll_top > 0){
		$(".M-top").addClass("M-top-show");
		$(".M-top").css("left", "0px");
		$(".M-top").css("top", "-165px");
	}
});
$(function(){
	$(".M-menu2").click(function(){
		$(".M-top").addClass("M-top-show");
		$(".M-top").animate({top:'0px'},"slow");
		$("#topcontrol").animate({right:'-122px'},"slow");
	})
})
