function silderBox(element){

	var sWidth = $(element).width(); //获取焦点图的宽度（显示面积）
	var len    = $(element+" ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn  = "<div class='btn-bg'></div><div class='btnico-box'><div class='btnico'>";
	var $str ='';
	for(var i=0; i < len; i++) {
		btn += "<span>&nbsp;</span>";
	
		//针对全屋定制
		if(typeof($(element+" li img").attr("data-type")) != 'undefined'){//有标题的时候调用
			if(i==0){
				$css = " class='selected'";
			}else
			{
				$css = "";
			}
			$str = $str + "<span onMouseOver='showLayoutImg("+i+");'"+$css+">"+$(element+" li").eq(i).find("img").attr("data-type")+"</span>";
		}

	}
	btn += "</div></div><div class='preNext pre'></div><div class='preNext next'></div>";
	$(element).append(btn);
	$(element).append("<div class='cst-focus-icons'>"+$str+"</div>");
	
	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$(element+" .btnico span").css("opacity",0.8).mouseover(function() {
	index = $(element+" .btnico span").index(this);
	showPics(index, element);
	}).eq(0).trigger("mouseover");
	
	//上一页、下一页按钮透明度处理
	$(element+" .preNext").hover(function() {
	$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
	$(this).stop(true,false).animate({"opacity":"1"},300);
	});

	if ($(element).attr("id") != "team-focus") {
		$(element+" .preNext").css("display","none");
		$(element).hover(function() {
		$(this).stop(true,false).find(".preNext").show();
		},function() {
		$(this).stop(true,false).find(".preNext").hide();
		});
	};


	//上一页按钮
	$(element+" .pre").click(function() {
	index -= 1;
	if(index == -1) {index = len - 1;}
	showPics(index, element);
	});
	
	//下一页按钮
	$(element+" .next").click(function() {
	index += 1;
	if(index == len) {index = 0;}
	showPics(index, element);
	});
	
	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$(element+" ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$(element).hover(function() {
	clearInterval(picTimer);
	},function() {
	picTimer = setInterval(function() {
		showPics(index, element);
		index++;
		if(index == len) {index = 0;}
	},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");

}

//显示图片函数，根据接收的index值显示相应的内容
function showPics(index, element) { //普通切换
	var sWidth = $(element).width(); //重新定义变量
	var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
	$(element+" ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	$(element+" .btnico span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
	$(element+" .btnico span").stop(true,false).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	
	var $e = $(element+" li").eq(index).find("img");
	var $str = '';
	
}


//下拉菜单通用函数
function downMenu()
{
	if($(".down-menu").size() > 0)
	{
		$(".down-menu").each(function(){
			$a = $(this).find("a").eq(0);
			if($(this).attr("id") == undefined) 
			{
				$(this).css("position", "relative");
				$a.css("position", "relative");
			}
			$a.css("position", "relative");
			
		})	
		
		$(".down-menu").hover(function(){
			$(this).find(".ico").removeClass("ico-downarr").addClass("ico-uparr");
			$(this).find(".down-menu-child").show();
			$(this).addClass("selected");
		},function(){
			$(this).find(".ico").removeClass("ico-uparr").addClass("ico-downarr");	
			$(this).find(".down-menu-child").hide();
			$(this).removeClass("selected");
		})
	}
}

//滚动函数
function scrollToPos(e, distance){
 $('html,body').animate({
	scrollTop:$(e).offset().top - distance}, 500
  );
}

//广告位鼠标划过显示透明层
function showAdBar()
{
	$(".ad").each(function(index, element) {
		  $(this).addClass("rel");
		  $title = $(this).find("img").attr("title");
		  if($title != "")
		  {
			  $w = $(this).find("img").attr("width");
			  $h = $(this).find("img").attr("height");
			  $(this).css({"width": $w, "height": $h, "overflow": "hidden"});
			  $("<div class='name'>"+$title+"</div>").appendTo($(this));
		  }
	  });
	  
	  $(".ad").hover(function()
	  {
		  $(this).find(".name").animate({bottom:"0"});
	  },function()
	  {
		  $(this).find(".name").animate({bottom:"-30px"});
	  })
}

$(function(){
	
	silderBox("#team-focus");
	$("#MASKAD").hover(function(){
		$href  = $(this).find("a").eq(0).attr("href");
		$(this).find(".desc").attr("href", $href);
		$(this).find(".desc").animate({"left": 0});
	},function(){
		$(this).find(".desc").animate({"left": -275});	
	})
})








