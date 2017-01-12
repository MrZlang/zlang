$(function(){
/**************************************************************************************************************/
$('.bigpic img:first').addClass('on');

var liNo=$('.small_spics ul li').length;
var liMax=-((liNo-3)*134);
var liMaxc=liMax+134;
var i=0,j=0;
if(liNo<=3){
	$('.small_right p').removeClass('s_right1').addClass('s_right2');
};

$('.small_right,.f_rr').click(function(){
	if(liNo>3){
		if(i>liMax&&j<=liNo-1){
			i-=134;
			j+=1;
			$('.small_left p').removeClass('s_left1').addClass('s_left2');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq('+j+')').addClass('on');
		}else if(i<=liMax&&j<liNo-1){
			i=liMax;
			j++;
			$('.small_left p').removeClass('s_left1').addClass('s_left2');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq('+j+')').addClass('on');
		}else if(j>=liNo-1&&i<=liMax){
			j=0;
			i=0;
			$('.small_left p').removeClass('s_left2').addClass('s_left1');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq(0)').addClass('on');
		};
		$('.small_spics ul').animate({marginLeft:i+"px"},500);
		$('.bigpic img').css('display','none');
		$('.bigpic img').eq(j).css('display','block');
	}else if(liNo<=3){
		if(j<liNo-1){
			j++;
		}else{
			j=0;
		};
		$('.small_spics ul li').removeClass('on');
		$('.small_spics ul li:eq('+j+')').addClass('on');
		$('.bigpic img').css('display','none');
		$('.bigpic img').eq(j).css('display','block');
	};
	//console.log(liNo);
//	console.log(i);
//	console.log(j);
});
$('.small_left,.f_ll').click(function(){
	if(liNo>3){
		if(i<0&&j<=liNo-1){
			i+=134;
			j-=1;
			$('.small_left p').removeClass('s_left1').addClass('s_left2');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq('+j+')').addClass('on');
		}else if(i==0&&j>0){
			i=0;
			j--;
			$('.small_left p').removeClass('s_left1').addClass('s_left2');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq('+j+')').addClass('on');
		}else if(i==0&&j<=0){
			$('.small_left p').removeClass('s_left2').addClass('s_left1');
			$('.small_spics ul li').removeClass('on');
			$('.small_spics ul li:eq(0)').addClass('on');
		};
		$('.small_spics ul').animate({marginLeft:i+"px"},500);
		$('.bigpic img').css('display','none');
		$('.bigpic img').eq(j).css('display','block');
	}else if(liNo<=3){
		if(j>0){
			j--;
		}else{
			j=0;
		};
		$('.small_spics ul li').removeClass('on');
		$('.small_spics ul li:eq('+j+')').addClass('on');
		$('.bigpic img').css('display','none');
		$('.bigpic img').eq(j).css('display','block');
	};

});
$('.small_spics ul li').click(function(){
	j=$('.small_spics ul li').index(this);
	$('.small_spics ul li').removeClass('on');
	$('.small_spics ul li:eq('+j+')').addClass('on');
	$('.bigpic img').css('display','none');
	$('.bigpic img').eq(j).css('display','block');
});
$('.small_huxing').mouseover(function(){
	$('.bigpic').css('display','none');
	$('.big_huxing').css('display','block');
}).mouseout(function(){
	$('.bigpic').css('display','block');
	$('.big_huxing').css('display','none');
});

/**************************************************************************************************************/

$('.tip_shares').mouseover(function(){
	$('.tip_sets').css('display','block');
}).mouseout(function(){
	$('.tip_sets').css('display','none');
});



//°å²Ä
$('.panel_sets:first').css('display','block');
$('.panel_sets ul').mouseover(function(){
	$(this).children('.p_big').css('display','block');
	$(this).css('z-index','44');
}).mouseout(function(){
	$(this).children('.p_big').css('display','none');
	$(this).css('z-index','33');
});

var d=0;
$('.panel_down').click(function(){
	if(d<1){
		d++;
		$('.panel_up .up').removeClass('up').addClass('up1');
		}else if(d=1){
			d++;
			$('.panel_down .down').removeClass('down').addClass('down1');
		}
	$('.panel_sets').css('display','none');
	$('.panel_sets:eq('+d+')').css('display','block');
});
$('.panel_up').click(function(){
	if(d>1 ){
		d--;
		$('.panel_down .down1').removeClass('down1').addClass('down');
		}else if(d=1){
			d--;
			$('.panel_up .up1').removeClass('up1').addClass('up');
		}
	$('.panel_sets').css('display','none');
	$('.panel_sets:eq('+d+')').css('display','block');
});

//ÂÖ²¥
var u=0;
var uN=$('.c_left2_imgs a').length-1;
function lunbo(){
// u=$('.cleft2_dots li').index(this);
if(u<uN){
	u++;
}else{
	u=0;
};
$('.c_left2_imgs a,.cleft2_texts li,.cleft2_dots li').removeClass('on');
$('.c_left2_imgs a:eq('+u+'),.cleft2_texts li:eq('+u+'),.cleft2_dots li:eq('+u+')').addClass('on');
};
$('.cleft2_dots li').mouseover(function(){
	clearInterval(cleft);
}).mouseout(function(){
	cleft=setInterval(lunbo,2000);
});

var cleft=setInterval(lunbo,2000);
$('.cleft2_dots li').mouseover(function(){
	u=$('.cleft2_dots li').index(this);
	$('.c_left2_imgs a,.cleft2_texts li,.cleft2_dots li').removeClass('on');
	$('.c_left2_imgs a:eq('+u+'),.cleft2_texts li:eq('+u+'),.cleft2_dots li:eq('+u+')').addClass('on');
});


$('.nav .navs .navli').click(function(){
	$('.nav .navs .navli').removeClass('on');
	$(this).addClass('on');
});
$('.navli:first').click(function(){
	$('html,body').animate({scrollTop:$('#s_style').offset().top-20},0);
});
$('.navli:eq(1)').click(function(){
	$('html,body').animate({scrollTop:$('#s_xijie').offset().top},0);

});
$('.navli:eq(2)').click(function(){
	$('html,body').animate({scrollTop:$('#s_guoji').offset().top},0);
});
$('.fast_up').click(function(){
	$('html,body').animate({scrollTop:0},500);
});

$(window).scroll( function() {
	var m = $(window).scrollTop();
	var headHeigt=790;//header of height
	var navh10=$('.footertoe').position().top;
	if(m>headHeigt&&m<navh10){
		$('.nav').addClass('nav_position');
	}else if(m>=navh10){
		$('.nav').removeClass('nav_position');
	}else{
		$('.nav').removeClass('nav_position');
	};
});



$('.full_collection .tip_collection:first').css('display','none');
$('.full_collection').mouseover(function(){
	$('.full_collection .tip_collection:eq(0)').css('display','block');
	$('.full_collection .tip_collection:eq(1)').css('display','none');
}).mouseout(function(){
	$('.full_collection .tip_collection:eq(1)').css('display','block');
	$('.full_collection .tip_collection:eq(0)').css('display','none');
});
})

// JavaScript Document
