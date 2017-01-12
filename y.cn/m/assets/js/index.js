$(document).ready(function(){
	$(".right a:eq(0)").click(function(){
    	$("html, body").animate({scrollTop:0},"show");
    });
$(window).scroll(function() {
	if($(window).scrollTop()>=100){
  		$(".right a:eq(0)").css("display","block")
	}else{
  		$(".right a:eq(0)").css("display","none")
	}
	});
});
$(document).ready(function(){
	$(".pcleyu").click(function(){
		$('.show').css('display','block');
		$('.show-mask').css('display','block');
	})
	$('.show .close').click(function(){
		$('.show').css('display','none');
		$('.show-mask').css('display','none');
	})
})
/*product_nav*/
$(document).ready(function(){
	//$('html').css('zoom',$(window).width()/320);
	$('.tab li').click(function(){
		var a = $(this).index();
		$(this).addClass('tab_i').siblings().removeClass('tab_i');
		$('.box_ner').eq(a).addClass('on').siblings().removeClass('on');
	});
});
