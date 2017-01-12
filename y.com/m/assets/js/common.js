var web_path = "/";
try {
	!
	function() {
		var hanli = function() {
				var self = this;
				this.init = function() {
					typeof FastClick != "undefined" && FastClick.attach(document.body);
					this.setMainHeight();
					this.bindMenuEvent();
					$("#ftop").click(function() {
						self.bindScrollAnimate("html,body", 1);
					});
					$("#zsh-bm-btn").click(function() {
						self.bindScrollAnimate("#main", 200);
					});
					$("#boom").click(function() {
						self.bindScrollAnimate("#main", 200);
					});
					$("#foot").click(function() {
						self.bindScrollAnimate("#main", 200);
					});
					var icon_wx = $(".icon-wx");
					function hide_wx_ewm(event) {
						event.stopPropagation();
						event.preventDefault();
						icon_wx.removeClass("active");
						$("body")[0].removeEventListener("touchstart", hide_wx_ewm, false);
					}
					icon_wx.click(function() {
						$(this).toggleClass("active");
						if ($(this).hasClass("active")) {
							$("body")[0].addEventListener("touchstart", hide_wx_ewm, false);
						}
					});
				}
				this.setMainHeight = function() {}
				this.bindMenuEvent = function() {
					var isClick = false;
					var of = 0.73;
					var menu = $("#menu");
					var span = menu.find(".menu-close");
					var mainWrap = $("#main-wrap");
					var header = $(".head");
					var wHeight = $(window).height();
					var wWidth = $(window).width();
					var rightMenu = $("#right-menu");
					var main = $("#main");
					var footBtn = $("#foot-top");
					footBtn.on("click", function() {
						self.bindScrollAnimate("#main", 1)
					});
					var timer = null;
					mainWrap.addClass("aminate");
					//rightMenu.height(wHeight);
					menu.on("click", function() {
						if (isClick) {
							hideMenu();
						} else {
							footBtn.css("display", "none");
							mainWrap.animate({
								"marginLeft": "-73%"
							}, 200);
							rightMenu.animate({
								"left": "27%"
							}, 200);
							header.animate({
								"left": "-73%"
							}, 200);
							$("html").css({
								"overflow": "hidden",
								"height": "auto"
							});
							$("body").addClass("no-scroll");
							//.css({"transform":"translateX(-73%)","-webkit-transform":"translateX(-73%)"});
							setTimeout(function() {
								span.show();
							}, 200);
							isClick = true;
							main[0].addEventListener("touchstart", hideMenu, false);
						}
					});
					function hideMenu() {
						//mainWrap.addClass("aminate").css({"transform":"translateX(0)","-webkit-transform":"translateX(0)"});
						mainWrap.animate({
							"marginLeft": "0"
						}, 200)
						rightMenu.animate({
							"left": "100%"
						}, 200);
						header.animate({
							"left": "0%"
						}, 200);

						setTimeout(function() {
							span.hide();
							$("body").removeClass("no-scroll");
							$("html").css({
								"overflow": "auto",
								"height": "auto"
							});
							footBtn.css({
								"display": "block",
								"position": "fixed"
							});
						}, 200);
						isClick = false;
						main[0].removeEventListener("touchstart", hideMenu, false);
					}
					$(window).resize(function() {

						setTimeout(function() {
							var h = $(window).height();

							//rightMenu.css({height:h+"px"});	
						}, 300)
					})
				}
				this.initGetDate = function(classid, page, callback) {
					var self = this;
					var innerHeight = self.scrollObjWrap.height();
					var height = this.scrollObj.height();
					this.page = 0;
					self.getData(classid, self.page, callback);
					this.scrollObj.scroll(function() {
						if (self.getDataFlag == true) {
							return;
						}
						var st = $(this).scrollTop();
						innerHeight = self.scrollObjWrap.height();

						if (st > innerHeight - height + 10) {
							self.getData(classid, self.page, callback);
						}
					});
				}

				this.zs_init = function() {
					var sc = $(".swiper-container");
					this.swiper = new Swiper('.swiper-container', {
						pagination: '.swiper-pagination',
						paginationClickable: true,
						onSlideChangeEnd: function(swiper) {
							var i = swiper.activeIndex;
							var h = $(".swiper-slide").eq(i).height();
							sc.height(h);
						},
						onInit: function(swiper) {
							$(".swiper-slide").eq(0).find("img").on("load", function() {
								var h = $(".swiper-slide").eq(0).height();
								sc.height(h);
							})
						}
					});
				}
				this.zs_init_2 = function() {
					this.swiper = new Swiper('.swiper-container', {
						pagination: '.swiper-pagination',
						paginationClickable: true,
						autoplay: 5000,
						loop: true
					});
				}
				this.zs_img_load = function() {
					this.swiper.reInit();
				}
				this.bindScrollAnimate = function(obj, xscrollTo) {
					var obj = $(window);
					var goTop = null;
					function getScrollTop() {
						return obj.scrollTop();
					}
					function setScrollTop(value) {
						obj.scrollTop(value)
					}
					function scrollMoveTop() {
						setScrollTop(getScrollTop() / 1.1);
						if (getScrollTop() < xscrollTo) clearInterval(goTop);
					}
					function scrollMoveBottom() {
						setScrollTop(getScrollTop() / 0.9);
						if (getScrollTop() > xscrollTo) clearInterval(goTop);
					}
					goTop = setInterval(scrollMoveTop, 10);
				}
			}
		window.hl = new hanli();
		hl.init();
	}();



	;
	(function($) {
		$.fn.picLazyLoad = function(settings) {
			var $this = $(this),
				_winScrollTop = 0,
				_windowDiv = $(window),
				_winHeight = _windowDiv.height(),
				_btnTop = $("#foot-top"),
				timer = null;

			// 执行懒加载图片
			lazyLoadPic();
			// 滚动触发换图
			_windowDiv.on('scroll', function() {
				_winScrollTop = $(this).scrollTop();
				//console.log(_winScrollTop)
				lazyLoadPic();
			});

			// 懒加载图片

			function lazyLoadPic() {
				if (timer) clearTimeout(timer);
				if (_winScrollTop > 200) {

					_btnTop.css("visibility", "visible");
					_btnTop.addClass("active");
				} else {
					_btnTop.removeClass("active");
					timer = setTimeout(function() {
						_btnTop.css("visibility", "hidden");
					}, 300)
				}

			}
		}
	})($);
	$("img.layzimg").picLazyLoad({
		threshold: 50
	});
} catch (e) {
	console.log(e);
}