$(document).ready(function(){
  $(".feng").css("zoom",$(window).width()/320);
  $('.tab span').click(function(){
    var a = $(this).index()
	$('.tab i').animate({left:a*33.3+'%'},100)
  })
  $('.feng li').click(function(){
    $(this).addClass('feng-a').siblings().removeClass('feng-a')
  })
  $('.bottoms').click(function(){
    if($('#width').val() == ''){
	  bgs();
	  $('.bg').css('display','block').html('�¹�Ŀ�Ȳ���Ϊ��')
	}else if($('#width').val() < 1.6){
	  bgs();
	  $('.bg').css('display','block').html('�¹�Ŀ�Ȳ���С��1.6��')
	}else if($('#width').val() > 3){
	  bgs();
	  $('.bg').css('display','block').html('�¹�Ŀ�Ȳ���С��3.0��')
	}else if($('#height').val() == ''){
	  bgs();
	  $('.bg').css('display','block').html('�¹�ĸ߶Ȳ���Ϊ��')
	}else if($('#height').val() < 2){
	  bgs();
	  $('.bg').css('display','block').html('�¹�ĸ߶Ȳ���С��2.0��')
	}else if($('#height').val() > 3){
	  bgs();
	  $('.bg').css('display','block').html('�¹�ĸ߶Ȳ��ܴ���3.0��')
	}else{
    var val = $('#style').val();
	  var width = $('#width').val();
	  var height = $('#height').val(); //��ȡ
	  $('#search-form').submit();
	  window.location.href="budget_result_m0"+val+".html"+"?width="+width+"&height="+height+"&style="+val;
	}
  })
})

function bgs(){
  setTimeout(function(){
	$('.bg').animate({opacity:'1',marginTop:'-40px'},200)
  },0)
  setTimeout(function(){
	$('.bg').animate({opacity:'0',marginTop:'-60px'},200)
  },700)
  setTimeout(function(){
	$('.bg').css('display','none').animate({marginTop:'-20px'},200)
  },900)
}
