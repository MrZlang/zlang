/**
* Created by @jinhw1201@qq.com on 2016/03/13.
*/

//选项卡切换
function TabControl(tabnav, eventName, tabbd, cur) {

    var $tabtit = $(tabnav).children();
    $tabtit.bind(eventName, function () {
        var index = $(this).index();
        var $tabtxt = $(this).parent().next(tabbd).children();
        $(this).addClass(cur).siblings().removeClass(cur);

        $tabtxt.hide().eq(index).show();
        //$(tabbd).find('img.lazy_ranklist').trigger('lazy_ranklist');
    });
}

$(function () {

    TabControl(".js-tab1", "hover", ".tab-content", "current");
    TabControl(".js-tab2", "hover", ".tab-content", "active");
    TabControl(".js-tab3", "hover", ".tab-content", "active");
    TabControl(".js-tab4", "hover", ".tab-content", "active");
    TabControl(".js-tab5", "hover", ".tab-content", "active");
    TabControl(".js-tab6", "hover", ".tab-content", "active");
    TabControl(".js-tab-picture", "hover", ".tab-content", "current");
    TabControl(".js-tab-news", "hover", ".tab-content", "current");

    $(".js-navs .nav-tit").each(function () {
        $(this).mouseover(function () {

            $(this).children(".subnav").show();
        });
        $(this).mouseout(function () {
            $(this).children(".subnav").hide();
        });
    });

    $(".js-rank li").each(function () {
        $(this).hover(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    });

    $("#js-dropdown").hover(function () {
        $(this).children(".dropmenu").stop(true, true).slideDown();

    }, function () {
        $(this).children(".dropmenu").stop(true, true).slideUp();
    });
    $("#js-dropdown>.dropmenu>li a").click(function () {
        $(".dropdown-toggle").html($(this).text());
        $(".form-search #keyword").attr("placeholder", $(this).attr("title"));
        $("#js-dropdown>.dropmenu").stop(true, true).slideToggle();
    });


    $(".slogan-s-a").hover(function () {
        $(this).children(".select-city").toggle();
    });

    $("#retrunTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 100);
    });
    var subss = function () {
        
        var txt = $("#keyword").val();
        if (txt == "") { $("#keyword").focus(); return; }
        var type = $("#dropdown-toggle").text();
        txt = encodeURI(txt);
       
        var url = "";
        
       
        switch (type) {
            case "装修公司":
                url = "/zrzx/zxgs1_1_3_17_22_27_" + txt;
                break;
            case "设计师":
                url = "/sjs/f0s0r0/" + txt;
                break;
            case "效果图":
                url = "/Pirture/" + txt + "/";
                break;
            case "资讯":
                url = "/news/1_" + txt;
                break;
            case "装修知识":
                url = "/xzx/1_" + txt;
                break;
            default:
        }
        location.href = url;
    };
    $("#keyword").off("keydown").on({
        keydown: function (event) {
            if (event.keyCode == 13) {
                subss();
                return false;
            }
            return false;
        }
    });
    $(".btn-search").click(subss);

    
});
function unlogin() {
    $(".logreg").html("<a href=\"/login/register.html\" target=\"_blank\" class=\"text-gray mr10\">注册</a>/<a class=\"ml10 text-gray\" target=\"_blank\" href=\"/login/login.aspx\" class=\"text-gray\">登录</a>");
    $.post("/index.aspx", { modname: "unload" });
}
$(function () {
    setTimeout(function () {
        $("#pic_ad").jCarouselLite({
            btnNext: "#next_pic",
            btnPrev: "#prev_pic",
            scroll: 1,
            visible: 6,
            auto: 3000,
            speed: 600,
            mouseWheel: true,
            start: 0
        });
        $("#pic_ad1").jCarouselLite({
            btnnext: "#next_pic1",
            btnprev: "#prev_pic1",
            scroll: 1,
            visible: 7,
            auto: 3000,
            speed: 600,
            mousewheel: true,
            start: 0
        });
        /*if ($("#pic_ad2 ul li").length < 7) {
        var ss = $("#pic_ad2 ul");
        ss.append(ss.html());
        }*/
        $("#pic_ad2").jCarouselLite({
            btnNext: "#next_pic2",
            btnPrev: "#prev_pic2",
            scroll: 1,
            visible: 7,
            auto: 5000,
            speed: 600,
            mouseWheel: true,
            start: 0
        });
    }, 30);
});

jQuery.fn.slideLeftHide = function (speed, callback) {
    this.animate({
        width: "hide",
        paddingLeft: "hide",
        paddingRight: "hide",
        marginLeft: "hide",
        marginRight: "hide"

    }, speed, callback);
};
jQuery.fn.slideLeftShow = function (speed, callback) {
    this.animate({
        width: "show",
        paddingLeft: "show",
        paddingRight: "show",
        marginLeft: "show",
        marginRight: "show"
    }, speed, callback);
};