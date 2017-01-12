//判断浏览器
var YXH={
    platform: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion,
            e=window.navigator.userAgent;
        var ieNub=999,browserName=false;
        var thisBody = document.body || document.documentElement,
	    thisStyle = thisBody.style,
	    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
        
        if(e.indexOf("MSIE") >= 0){
            if(e.indexOf("MSIE 6.0")>0) ieNub=6;
            if(e.indexOf("MSIE 7.0")>0) ieNub=7;
            if(e.indexOf("MSIE 8.0")>0) ieNub=8;
            if(e.indexOf("MSIE 9.0")>0) ieNub=9;
            if(e.indexOf("MSIE 10.0")>0) ieNub=10;
            if(e.indexOf("MSIE 11.0")>0) ieNub=11;
            if(e.indexOf("MSIE 12.0")>0) ieNub=12;
            browserName='ie';
        }else{
            if (e.indexOf("Firefox") >= 0) browserName="firefox";
            if(e.indexOf("Safari") >= 0) browserName="safari";
            if(e.indexOf("Chrome") >= 0) browserName="chrome";
            if(e.indexOf("Opera") >= 0) browserName="opera";
        }
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1,
            ismobile : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            weichat: u.indexOf('MicroMessenger') > -1,
            html5: support ? true : false,
            ie: ieNub,
            browser: browserName
        };
    }
}
// $(function() {
// 	//导航
// 	$(".nav-h-products").hover(function(){
// 		$(".menu-series").hide();
// 		$(".menu-series").show();
// 		$(this).addClass("current");
// 	},function(){
// 		$(".menu-series").hide();
// 		$(this).removeClass("current");
// 	});
// 	$(".menu-series").hover(function () {
//                 $(".menu-series").show();
//             },function(){
//                 $(".menu-series").hide();
//             });
// });
//滚动函数
// function scrollToPos(e, distance){
//  $('html,body').animate({
// 	scrollTop:$(e).offset().top - distance}, 500
//   );
// }
$(document).ready(function() { 
    //弹出表单
    $('.widget-container .scale').click(function() {
                $('.feedback-pop-container').fadeIn();
            });
    //关闭表单
    $('.feedback-pop-container .content .hidebtn').click(function() {
                $('.feedback-pop-container').fadeOut();
            });
    $(".h-nav li:eq(0)").addClass("nav-gb"); //首页添加class
    $(".h-nav li:eq(1)").addClass("nav-h-products"); //产品中心添加class
    //攻略列表页遍历添加数字排序
    $(".xl1 .dl1").each(function(index){
        $(".xl1 .dl1:eq("+index+") dt a").before("<em>"+(index+1)+"</em>");
        }) 
    //攻略内容页遍历添加数字排序
    $(".case-hot li").each(function(index){
        $(".case-hot li:eq("+index+") a").prepend("<b>"+(index+1)+"</b>");
        if(index<3){
            $(".case-hot li a b").addClass("top")
        }
        }) 
}); 
$(window).scroll(function(){
	var wheight=$(".banner-wrap").height();
	var top=$(window).scrollTop();
	if(top<wheight){
	$(".yxh-high").css("display","block");
	}
	if(top>wheight){
	$(".yxh-high").css("display","none")
	}
	//返回顶部
	// if(parseInt($(document).scrollTop()) > 200){
	// 	  $("#gotop").fadeIn();
	//   }else{
	// 	   $("#gotop").fadeOut();
	//   }
});
$(function() {
	//底部微信悬浮
	$(".vf-f-weixin").hover(function(){
		$(".weixin-overbox").show();
	},function(){
		$(".weixin-overbox").hide();
	});
	//微信悬浮位置偏移
	var
        _footerBox=$('#yxh-foot-wrap'),
        _footerShareBtn=_footerBox.find('.yxh-f-share .vf-f-weixin'),
        _footerSharePop=_footerBox.find('.yxh-f-share .weixin-overbox');
        _footerShareBtn.on({
            mouseenter : function(){
                _footerSharePop.css({left:$(this).offset().left-(_footerSharePop.width()/2)+12});
                _footerSharePop.show();
            },
            mouseleave : function(){
                _footerSharePop.hide();
            }
        });
});
//滚动模糊
jQuery(function(){ 
	var
        a=this,
        _mainbox=$('.wrap'),
        _highwrapbox=_mainbox.find('.banner-wrap'),
        _highbox=_mainbox.find('.yxh-high'),
        _headbox=_mainbox.find('.head-wrap'),
        _contbox=_mainbox.find('.contain'),
        _footbox=_mainbox.find('#yxh-foot'),
        _footwrapbox=_mainbox.find('#yxh-foot-wrap');
        
        var highblur=function(p){
            
                var cs={'-webkit-filter' : 'blur('+p+'px)'};
                if(YXH.platform.browser=='ie') cs={'-ms-filter' : 'blur('+p+'px)'};
                if(YXH.platform.browser=='ie' && YXH.platform.ie<9) cs={'filter': 'progid:DXImageTransform.Microsoft.Blur(PixelRadius="'+p+'")'};
                return cs; 
                
        };
    
        $(document).on({
            mouseleave : function(){
            },
            mouseenter : function(){
            }
        });

        var resizeele=function(){
            var
            curScrollTop=$(window).scrollTop(),
            norHeight=winHeight=$(window).height(),
            norWidth=winWidth=$(window).width();
            
            if(_highbox.size()<=0){
                _footwrapbox.css({visibility:'visible'});
                _footbox.css({opacity:1});
                return;
            }
            
            winHeight=winHeight<400 ? 400 : winHeight;
            
            _highbox.css({height: winHeight});
            _highwrapbox.css({height: winHeight});
            
            //滚动轮播效果控制
            if(curScrollTop>0 && curScrollTop<=winHeight){
                var pt=curScrollTop/winHeight;
            }
            if(curScrollTop==0) pt=0;
            if(curScrollTop>=winHeight) pt=1;
            if(!YXH.platform.ismobile) _highbox.css(highblur(pt*10));

            
            //首页foot效果控制
            if(curScrollTop>_mainbox.height()-_footwrapbox.height()-winHeight && curScrollTop<_mainbox.height()-winHeight){
                var
                ftop=curScrollTop-(_mainbox.height()-_footwrapbox.height()-winHeight),
                fpt=ftop/_footwrapbox.height();
            }
            if(curScrollTop<=_mainbox.height()-_footwrapbox.height()-winHeight) fpt=0;
            if(curScrollTop>=_mainbox.height()-winHeight) fpt=1;
            if(!YXH.platform.ismobile) _footbox.css({opacity:fpt});
            
        };
        if(!YXH.platform.ismobile) _footbox.css({opacity:0});
        $(window).on({
            resize : resizeele,
            scroll : resizeele
        });
        resizeele();
        _highwrapbox.css({visibility:'visible'});
        _footwrapbox.css({visibility:'visible'});

        //返回顶部
         if($('#yxh-airbox').size()<1) $('body').append('<div id="yxh-airbox" />');
        $('#yxh-airbox').append('<div id="gotop"><a class="v-gb-ico" href="#"></a></div>');
        
        var
        _gotop=$('#gotop'),
        h,p,
        scrollFun=function(){
            h=$(window).height();
            p=$(window).scrollTop();
            _gotop.css({top:(h-_gotop.height()-80)});
            
            if(p>h){
                if(_gotop.hasClass('show')) return;
                _gotop.css({display:'block'});
                if(s !== 'undefined') clearTimeout(s);
                var s=setTimeout(function(){
                    _gotop.addClass('show');
                },100);
            }else{
                if(!_gotop.hasClass('show')) return;
                _gotop.removeClass('show');
                if(s !== 'undefined') clearTimeout(s);
                var s=setTimeout(function(){
                    _gotop.css({display:'none'});
                },300);
            }
        };
        _gotop.on({
            click : function(){
                var durScroll=Math.floor(p/h*100);
                durScroll=p>5000 ? durScroll/2 : durScroll;
                $('html,body').stop().animate({scrollTop:0},durScroll);
                return false;
            }
        });
        $(window)
            .off('resize')
            .on({
                scroll : scrollFun,
                resize : scrollFun
            });
        scrollFun();
        //导航
        var 
            TH=this,
            _nav=$('.head-wrap'),
            _menuBtn=_nav.find('.nav-tool a.nav-t-menu'),
            _navItem=_nav.find('.h-nav li.nav-h-products'),
            _navItems=_nav.find('.h-nav li.nav-gb'),
            curLitem=_nav.find('.h-nav li.current'),
            _navProSeries=$('.menu-series'),
            ttt=sss=tt=null,navMenushow=false;
        
        _navItems.on({
            mouseenter : function(){
                var a=$(this);
                setTimeout(function(){
                    a.addClass('current').siblings().removeClass('current');
                },100);
            },
            mouseleave : function(){
               if(!_navProSeries.is(':visible')){
                   setTimeout(function(){
                        curLitem.addClass('current').siblings().removeClass('current'); 
                   },100);
                }
            }
        });
        
        //products
        TH.delay=0;
        _navItem.on({
            mouseenter : function(){
                clearTimeout(ttt);
                clearTimeout(tt);
                clearTimeout(sss);
                if(!_navProSeries.is(':visible')) {
                    var a=$(this);
//                    TH.highStop();
                    var $high=$('.banner-wrap .yxh-high');
                    $high.size()>0 && window.VIVO_HIGHLIGHT && (VIVO_HIGHLIGHT.stop(), $high.data({isactive: ''}));
                    navMenushow=true;
                    tt=setTimeout(function(){
                        a.addClass('current').siblings().removeClass('current');
                        _navProSeries.css({display:'block',opacity:0}).stop().animate({opacity:1},300,function(){
                            $('body').addClass('OpenNavproduct');
                        });
                    },TH.delay);
                }
            },
            mouseleave : function(){
                var a=$(this);
                navMenushow=false;
                clearTimeout(ttt);
                clearTimeout(tt);
                clearTimeout(sss);
                ttt=setTimeout(function(){
                    if(!navMenushow){
                        curLitem.addClass('current').siblings().removeClass('current');
                        !navMenushow && $('body').removeClass('OpenNavproduct');
                        if($('html').hasClass('nohtml5')){
                            TH.delay=0;
                        }else{
                            TH.delay=400;
                        }
                        sss=setTimeout(function(){
                                _navProSeries.stop().animate({opacity:0},300,function(){
                                   $(this).hide();
                               });
                        },TH.delay);
                    }
                },100);
            }
        });
        _navProSeries.find('.vms-bigbox').on({
            mouseenter : function(){
                clearTimeout(ttt);
                clearTimeout(tt);
//                clearTimeout(sss);
                navMenushow=true;
            },
            mouseleave : function(){
                navMenushow=false;
                clearTimeout(ttt);
                clearTimeout(tt);
                clearTimeout(sss);
                ttt=setTimeout(function(){
                    if(!navMenushow){
                        curLitem.addClass('current').siblings().removeClass('current');
                       $('body').removeClass('OpenNavproduct');
                        if($('html').hasClass('nohtml5')){
                            var delay=0;
                        }else{
                            var delay=400;
                        }
                        sss=setTimeout(function(){
                                _navProSeries.stop().animate({opacity:0},300,function(){
                                   $(this).hide();
                               });
                        },delay);
                    }
                },100);
            }
        });
        
        
        var resizeNav=function(){
            if(_nav.hasClass('openMenu')) _menuBtn.click();
            if(_menuBtn.is(':visible')){
                _nav.find('.yxh-head ul.h-nav').hide();
                _menuBtn.off('click').click(function(){
                    if(_nav.hasClass('openMenu')){
                        _nav.removeClass('openMenu');
                        var tt=setTimeout(function(){
                            _nav.find('.yxh-head ul.h-nav').hide();
                        },300);
                    }else{
                        _nav.find('.yxh-head ul.h-nav').show();
                        var tt=setTimeout(function(){
                            _nav.addClass('openMenu');
                        },300);
                    }
                    return false;
                });
            }else{
                _nav.find('.yxh-head ul.h-nav').css({display:'table'});
            }
            _navProSeries.css({height:$(window).height()+100});
            if($('body').hasClass('OpenNavproduct')){
                _navProSeries.hide().find('.vms-bigbox').mouseleave();
            }
        };
        
        $(window).on({
            resize :resizeNav,
            scroll :resizeNav
        });
        resizeNav();

        //关于我们tab效果开始
        var _aboutbox=$('.hr-about-page'),
            _aboutin=_aboutbox.find('.hr-list-content .hr-about-list li'),
            _aboutitem=_aboutbox.find('.hr-list-content .hr-about-item');
        
        _aboutitem.hide();
        _aboutin.click(function(){
           if($(this).hasClass('current')) return false;
            $(this).addClass('current').siblings().removeClass('current');
            if($(this).index() === 3){
                _aboutbox.find('.hr-about-p4 .gallery-box').each(function(){
                    $(this).find('.imgbtn a').first().click();
                });
            }
            _aboutitem.eq($(this).index()).show().siblings('div').hide();
            return false;
        }).first().click();
        
        
        var
        imgbox=_aboutbox.find('.hr-about-p4 .gallery-box');
        
        
        var fixImgDemo=function(){
           setTimeout(function(){
               imgbox.find('ul').css({height: imgbox.find('ul.imgbox li').first().height()}); 
           },1);
        };
        
        imgbox.each(function(i,j){
            var
            a=$(j),
            imgdemo=a.find('ul.imgbox li'),
            imgbtn=a.find('.imgbtn'),
            imgsize=imgdemo.size(),
            cchtml='';
            
            
            for(var i=0; i<imgsize; ++i){
                cchtml+="<a></a>";
            }
            imgbtn.html(cchtml);
            
            
            imgbtn.find('a').click(function(){
                if($(this).hasClass('current')) return false;
                $(this).addClass('current').siblings().removeClass('current');
                var curitem=$(this).index();
                imgdemo.eq($(this).index()).css({display:'block',opacity: 0,zIndex: 2}).stop().animate({opacity :1},300,function(){
                    $(this).siblings().hide();
                })
                .siblings().css({zIndex:1});
                fixImgDemo();
                return false;
            });
            
        });

        $(window).resize(fixImgDemo);
        //关于我们tab效果结束
            //懒加载
    var z = 0,
          imgNum = $("img").length,
          img = $('img');
    lazyload();
    $(window).scroll(lazyload);
    function lazyload(event) {
        for (var x = z; x < imgNum; x++) {
            if (img.eq(x).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
                if (img.eq(x).attr("src") == "/templets/yxh/images/grey.gif") {
                    var src = img.eq(x).attr("data-src");
                    img.eq(x).attr("src", src);
                    z = x + 1;
                }
            }
        }
    }
});
//搜索栏
(window.jQuery), $(function() {
	!
	function() {
		var e = $(".head-wrap"),
			t = e.find(".head-search"),
			a = t.find(".search-input"),
			n = $(".nav-t-search"),
			c = t.find("a.close"),
			i = !0;
			n.on("click", function() {
				$(".vms-bigbox").css("top","160px");
				$(".customa_nav").css("top","160px");
				return i ? (t.slideDown(300), a.focus().val(""), i = !1) : t.stop().slideUp(300, function() {
					$(".vms-bigbox").css("top","80px");
					$(".customa_nav").css("top","80px");
					$(this).css({
						display: "none"
					}), i = !0
				}), !1
		}), c.on("click", function() {
			return n.click(), !1
		})
	}() 
})
$(function(){
	        //精品案例hover效果
         var  customa_nav = $(".customa_nav"),
                customa_list = $(".customa_list");
 	 if (customa_nav.length > 0) {
    		var n = customa_nav.offset().top;
    		$("html, body").scrollTop(0).animate({scrollTop: n-120})
    		//customa_nav.css({position: "fixed", top: 80,"z-index": 5})
    		$(window).scroll(function() {
      		var i = $(document).scrollTop();
      			i > n ? customa_nav.css({position: "fixed",top: 80,"z-index": 10}) : customa_nav.css("position", "");
    		})
  	} else $("html, body").scrollTop(0);

        // customa_list.hover(function() {
        //     $(this).find("a").addClass("on")
        //   }, function() {
        //     $(this).find("a").removeClass("on")
        // })
})

jQuery(function(){ 

            $('#service_wechat').on({
                mouseenter : function(){
                    $('#service').find(".yxh-weixin-overbox").css({display:"block",opacity:0}).stop().animate({opacity:1},300);
                },
                mouseleave : function(){
                    $('#service').find(".yxh-weixin-overbox").stop().animate({opacity:0},300,function(){
                        $(this).css({display:"none",opacity:0});
                    });
                },
                click : function(){
                    return false;
                }
            });

            $('.hotforum dl').each(function(i){
                var data_fid = $(this).find('dt>a').attr('data-fid');
                $(this).hover(
                    function () {
                        var icon = $(this).find('dt>a>img');
                        var icon_img = '/templets/yxh/images/case/' + data_fid + '.gif';
                        icon.attr('data-origin', icon.attr('src')).attr('src',icon_img);
                    },
                    function () {
                        var icon = $(this).find('dt>a>img');
                        icon.attr('src',icon.attr('data-origin'));
                    }
                );
            });

            $('.vhot dl').mouseover(function(){
                $('.vhot dl').each(function(i){
                    $(this).find('dd').hide();
                });
                $('.vhot dl').eq($(this).index()).find('dd').show();
            });
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
$(document).ready(function () { 
    
    //初始化上下滑方法 
    shake();
    //不断上下滑动 
    function shake(){
        if ($('.bottom_slide_up').css('top') == '-60px' || $('.bottom_slide_down').css('top') == '-50px') {
            $('.bottom_slide_up').stop().animate({top:'-42px'},500,function(){
                shake();    
            });
        }
        if ($('.bottom_slide_up').css('top') == '-42px') {
            $('.bottom_slide_up').stop().animate({top:'-60px'},500,function(){
                shake();    
            });
        }    
    } 
    $('.bottom_slide_click').click(function(){
        if ($('.bottom_slide_down').hasClass('bottom_slide_up')) {
            $('.bottom_slide_box').stop().animate({bottom:'0'},500,function(){
                $('.bottom_slide_up').stop().removeAttr('style'); 
                $('.bottom_slide_down').removeClass('bottom_slide_up');
                $('.bottom_slide_down').css('top','-50px');                
            });               
        }else{
            $('.bottom_slide_box').stop().animate({bottom:'-71px'},500,function(){
                $('.bottom_slide_down').addClass('bottom_slide_up');
                shake();
            }); 
        }
    })
    $(".confirm-btn").click(function(){
        //侧栏预约测量
        var tel = $("#orderphone").val().trim();
        var name = $("#ordername").val().trim();
        var o_name = $("#ordername"),
             o_phone = $("#orderphone")
             oname = $(".xorder-name"),
             ophone = $(".xorder-phone"),
             ophone2 = $(".xorder-phone-2");
            if (name.length == 0) {
                 $("#ordername").focus();
                 oname.show();
                 ophone.hide();
                o_name.bind('click', function() {
                    oname.fadeOut();
                });
                 return false;
            } 
            if (!name.length == 0) {
              oname.hide();
            }
            if (tel.length == 0) {
                $("#orderphone").focus();
                ophone.show();
                ophone2.hide();
                o_phone.bind('click', function() {
                    ophone.fadeOut();
                });
                return false;
             }
             if(!isNum(tel) || !isTel(tel)){
                    $("#orderphone").focus();
                    ophone2.show();
                    ophone.hide();
                 o_phone.bind('click', function() {
                    ophone2.fadeOut();
                });
                 return false;
              }
                return true;
    })
    $("#details-btn").click(function(){
        //产品详情
        var tel = $("#detailsphone").val().trim();
        var name = $("#detailsname").val().trim();
        var d_name = $("#detailsname"),
             d_phone = $("#detailsphone")
             dname = $("#productxt"),
             dphone = $("#productxt2"),
             dphone2 = $("#productxt3");
            if (name.length == 0) {
                 $("#detailsname").focus();
                 dname.show();
                 dphone.hide();
                d_name.bind('click', function() {
                    dname.fadeOut();
                });
                 return false;
            } 
            if (!name.length == 0) {
              dname.hide();
            }
            if (tel.length == 0) {
                $("#detailsphone").focus();
                dphone.show();
                dphone2.hide();
                d_phone.bind('click', function() {
                    dphone.fadeOut();
                });
                return false;
             }
             if(!isNum(tel) || !isTel(tel)){
                    $("#detailsphone").focus();
                    dphone2.show();
                    dphone.hide();
                 d_phone.bind('click', function() {
                    dphone2.fadeOut();
                });
                 return false;
              }
                return true;
    })
    $(".btn_sub_apply").click(function(){
        //底部表单
        var tel = $("#botphone").val().trim();
        var name = $("#botname").val().trim();
        var b_name = $("#botname"),
             b_phone = $("#botphone")
             bname = $("#bottomname"),
             bphone = $("#bottomphone"),
             bphone2 = $("#bottomphone2");
            if (name.length == 0) {
                 $("#botname").focus();
                 bname.show();
                 bphone.hide();
                 bphone2.hide();
                b_name.bind('click', function() {
                    bname.fadeOut();
                });
                 return false;
            } 
            if (!name.length == 0) {
              bname.hide();
            }
            if (tel.length == 0) {
                $("#botphone").focus();
                bphone.show();
                bphone2.hide();
                b_phone.bind('click', function() {
                    bphone.fadeOut();
                });
                return false;
             }
             if(!isNum(tel) || !isTel(tel)){
                    $("#botphone").focus();
                    bphone2.show();
                    bphone.hide();
                 b_phone.bind('click', function() {
                    bphone2.fadeOut();
                });
                 return false;
              }
                return true;
    })
})
window.onload = function(){
var nowDate = new Date();
var dateStr = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
if($("#orderdate").length > 0)
    $("#orderdate").val(dateStr);
if($("#detailsdate").length > 0)
    $("#detailsdate").val(dateStr);
if($("#botdate").length > 0)
    $("#botdate").val(dateStr);
}
console.log('%cby:zly','color: red');