$(function() {
/*左侧导航*/
$(window).scroll(function(){
        var top_nav_scroll=$(window).scrollTop();
        if(top_nav_scroll>450){
            $('#nav').css('display','block');
        }else{
            $("#nav").css('display','none');
        }
    })
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
})
/*侧栏*/
$(document).ready(function(){
     $(".complain").click(function(){
        $('.suggest,.complain_mask').css('display','block');
     })
     $('.suggest .complain_close').click(function(){
        $('.suggest,.complain_mask').css('display','none');
     })
})
/*调用底部弹出表单*/
$(function(){
	if($(".fixbottom").length > 0){
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
function fixBar(e,left,cl, h){
	var wheight=$(window).height() - h-800;
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
// JavaScript Document
$(document).ready(function() {
    $("a[href*=#top1],a[href*=#section-1],a[href*=#section-2],a[href*=#section-3],a[href*=#section-4],a[href*=#section-5],a[href*=#page-work-foot]").click(function() {
        if ( location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $("[name=' + this.hash.slice(1) + ']");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $("html,body").animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
});

$(function() {

	var $sidescroll	= (function() {
			
			// the row elements
		var $rows			= $('#ss-container > div.ss-row'),
			// we will cache the inviewport rows and the outside viewport rows
			$rowsViewport, $rowsOutViewport,
			// navigation menu links
			$links			= $('#ss-links > a'),
			// the window element
			$win			= $(window),
			// we will store the window sizes here
			winSize			= {},
			// used in the scroll setTimeout function
			anim			= false,
			// page scroll speed
			scollPageSpeed	= 2000 ,
			// page scroll easing
			scollPageEasing = 'easeInOutExpo',
			// perspective?
			hasPerspective	= false,
			
			perspective		= hasPerspective && Modernizr.csstransforms3d,
			// initialize function
			init			= function() {
				
				// get window sizes
				getWinSize();
				// initialize events
				initEvents();
				// define the inviewport selector
				defineViewport();
				// gets the elements that match the previous selector
				setViewportRows();
				// if perspective add css
				if( perspective ) {
					$rows.css({
						'-webkit-perspective'			: 600,
						'-webkit-perspective-origin'	: '50% 0%'
					});
				}
				// show the pointers for the inviewport rows
				$rowsViewport.find('a.ss-circle').addClass('ss-circle-deco');
				// set positions for each row
				placeRows();
				
			},
			// defines a selector that gathers the row elems that are initially visible.
			// the element is visible if its top is less than the window's height.
			// these elements will not be affected when scrolling the page.
			defineViewport	= function() {
			
				$.extend( $.expr[':'], {
				
					inviewport	: function ( el ) {
						if ( $(el).offset().top < winSize.height ) {
							return true;
						}
						return false;
					}
				
				});
			
			},
			// checks which rows are initially visible 
			setViewportRows	= function() {
				
				$rowsViewport 		= $rows.filter(':inviewport');
				$rowsOutViewport	= $rows.not( $rowsViewport )
				
			},
			// get window sizes
			getWinSize		= function() {
			
				winSize.width	= $win.width();
				winSize.height	= $win.height();
			
			},
			// initialize some events
			initEvents		= function() {
				
				// navigation menu links.
				// scroll to the respective section.
				$links.on( 'click.Scrolling', function( event ) {
					
					// scroll to the element that has id = menu's href
					$('html, body').stop().animate({
						scrollTop: $( $(this).attr('href') ).offset().top
					}, scollPageSpeed, scollPageEasing );
					
					return false;
				
				});
				
				$(window).on({
					// on window resize we need to redefine which rows are initially visible (this ones we will not animate).
					'resize.Scrolling' : function( event ) {
						
						// get the window sizes again
						getWinSize();
						// redefine which rows are initially visible (:inviewport)
						setViewportRows();
						// remove pointers for every row
						$rows.find('a.ss-circle').removeClass('ss-circle-deco');
						// show inviewport rows and respective pointers
						$rowsViewport.each( function() {
						
							$(this).find('div.ss-left')
								   .css({ left   : '0%' })
								   .end()
								   .find('div.ss-right')
								   .css({ right  : '0%' })
								   .end()
								   .find('a.ss-circle')
								   .addClass('ss-circle-deco');
						
						});
					
					},
					// when scrolling the page change the position of each row	
					'scroll.Scrolling' : function( event ) {
						
						// set a timeout to avoid that the 
						// placeRows function gets called on every scroll trigger
						if( anim ) return false;
						anim = true;
						setTimeout( function() {
							
							placeRows();
							anim = false;
							
						}, 10 );
					
					}
				});
			
			},
			// sets the position of the rows (left and right row elements).
			// Both of these elements will start with -50% for the left/right (not visible)
			// and this value should be 0% (final position) when the element is on the
			// center of the window.
			placeRows		= function() {
				
					// how much we scrolled so far
				var winscroll	= $win.scrollTop(),
					// the y value for the center of the screen
					winCenter	= winSize.height / 1.4 + winscroll;
				
				// for every row that is not inviewport
				$rowsOutViewport.each( function(i) {
					
					var $row	= $(this),
						// the left side element
						$rowL	= $row.find('div.ss-left'),
						// the right side element
						$rowR	= $row.find('div.ss-right'),
						// top value
						rowT	= $row.offset().top;
					
					// hide the row if it is under the viewport
					if( rowT > winSize.height + winscroll ) {
						
						if( perspective ) {
						
							$rowL.css({
								'-webkit-transform'	: 'translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
								'opacity'			: 0
							});
							$rowR.css({
								'-webkit-transform'	: 'translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
								'opacity'			: 0
							});
						
						}
						else {
						
							$rowL.css({ left 		: '-50%' });
							$rowR.css({ right 		: '-50%' });
						
						}
						
					}
					// if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
					else {
							
							// row's height
						var rowH	= $row.height(),
							// the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
							factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
							// value for the left / right of each side of the row.
							// 0% is the limit
							val		= Math.max( factor * 50, 0 );
							
						if( val <= 0 ) {
						
							// when 0% is reached show the pointer for that row
							if( !$row.data('pointer') ) {
							
								$row.data( 'pointer', true );
								$row.find('.ss-circle').addClass('ss-circle-deco');
							
							}
						
						}
						else {
							
							// the pointer should not be shown
							if( $row.data('pointer') ) {
								
								$row.data( 'pointer', false );
								$row.find('.ss-circle').removeClass('ss-circle-deco');
							
							}
							
						}
						
						// set calculated values
						if( perspective ) {
							
							var	t		= Math.max( factor * 75, 0 ),
								r		= Math.max( factor * 90, 0 ),
								o		= Math.min( Math.abs( factor - 1 ), 1 );
							
							$rowL.css({
								'-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
								'opacity'			: o
							});
							$rowR.css({
								'-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
								'opacity'			: o
							});
						
						}
						else {
							
							$rowL.css({ left 	: - val + '%' });
							$rowR.css({ right 	: - val + '%' });
							
						}
						
					}	
				
				});
			
			};
		
		return { init : init };
	
	})();
	
	$sidescroll.init();
	
});
/*work*/
    $(function(){
    var browser=navigator.appName
    var b_version=navigator.appVersion
    var version=b_version.split(";");
    var trim_Version=version[1].replace(/[ ]/g,"");
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
    {
    $("#ifrm").hide();
    $(".M-work").css("width","1180px")
    $(".bd").css("width","1240px")
    $(".bd").css("margin","0 auto")
    $(".bd ul").css("width","1240px")
    $(".bd ul").css("margin","0 auto")
    $("#juzhong").css("width","1240px")
    $("#juzhong").css("margin","0 auto")
    $(".M-work").css("margin","0 auto")
    $(".M-work").css("height","510px")
    $(".M-work").css("overflow","hidden")
    $(".M-work").css("padding-left","30px")
    }
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
    {
    $(".M-work").css("width","1180px")
    $(".M-work").css("margin","0 auto")
    $(".bd").css("width","1240px")
    $(".bd").css("margin","0 auto")
    $(".bd ul").css("width","1240px")
    $(".bd ul").css("margin","0 auto")
    $(".M-work").css("height","510px")
    $("#juzhong").css("width","1240px")
    $("#juzhong").css("margin","0 auto")
    $(".M-work").css("overflow","hidden")
    $(".M-work").css("padding-left","30px")
    }
    })
/*news*/
$(function(){
	var H=$(window).width()/2-80
	if(H){
		$(".ss-left").css("width",H)
		$(".ss-right").css("width",H)
	}
})
$(window).resize(function(){
	var resolutionList="320,400,640,800,1024,1280,1400,1440,1600,1680,1920,2048,2560,3200,3840,";
	var resolutionListt="1280,";
	var nowwidth=window.screen.width;
	var H=$(window).width()/2-80
	if(resolutionList.indexOf(nowwidth + ",")==-1 ){
			if(H){
				$(".ss-left").css("width",H)
				$(".ss-right").css("width",H)
			}
			}else{
				if(H){
					$(".ss-left").css("width",H)
					$(".ss-right").css("width",H)
					}
				}
});	



















