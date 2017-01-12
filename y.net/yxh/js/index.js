  (function(){
    var $wrap=$("#wrap"),
        $pages=$("#product_list").find(".product_box"),
        $controlBox=$("#control_box"),
        $productBtns=$("#product_btns"),
        $controls=$controlBox.find("a"),
        $icLine=$("#ic_line"),
        $listTops=$("#list_top").find("li"),
        $hNav=$("#h_nav"),
        $hNavli=$hNav.find("li"),
        $hSubnav=$("#h_subnav"),
        $hSubDD=$hSubnav.find("dd"),
        $hBdot=$("#h_bdot"),
        $hSdot=$("#h_sdot"),
        $footer=$("#footer"),
        $bgs=$pages.find(".bg_box img"),
        $mainBoxs=$pages.find(".main_box"),
        $moreNav=$("#more_nav"),
        $rptBg=$("#rpt_bg"),
        $xnetDownload=$("#xnet_download"),
        $xavDownload=$("#xav_download");
    var data={
        pLength:$pages.length,
        curP:-1,
        isCan:true,
        isOnbtn:false,
        fColor:[2,2,1,1,1],
        dur: 5000,
        cNum:0
    };
    var aDD=$controls.eq(0).width()+parseInt($controls.eq(0).css("margin-right").slice(0,-2))*2;
    var cId;
    var isCss3=function(){
      var style=document.createElement("div").style;
        for(var k in style){
          if(k.toLowerCase().indexOf("animation")>=0){
            return true;
          }
         }
         return false;
    }();
    var isIE6=navigator.userAgent.indexOf("MSIE 6.0") > 0;

    //页面自缩放
    var resize=function(){
      var w=$(window).width(),
          h=$(window).height();
      $wrap.height(h);
      $moreNav.height(h);
      if(w/h<1920/1080){
        $bgs.height(h).css({width:"auto",margin:-.5*h+"px 0 0 "+-.5*1920/1080*h+"px"});
      }else{
        $bgs.width(w).css({height:"auto",margin:-.5*w*1080/1920+"px 0 0 "+-.5*w+"px"});
      }
      var imgH=$bgs.height();
      $mainBoxs.height(imgH).css("margin-top",-.5*imgH+"px");
      var cls;
      if(isCss3){
        document.getElementById("wrap").className="wrap big_view css3";
      }else{
        switch(true){
          case w>=1600:{cls="big_view";break;}
          case w<1600&&w>=1440:{cls="mid_view";break;}
          case w<1440:{cls="small_view";break;}
        }
        var ws=$wrap[0].className;
        if(isIE6&&(ws.indexOf("big")!=-1||ws.indexOf("mid")!=-1||ws.indexOf("small")!=-1)&&ws.indexOf(cls)==-1)
          location.reload();
        wrap.className="wrap "+cls;
      }  
      aDD=$controls.eq(0).width()+parseInt($controls.eq(0).css("margin-right").slice(0,-2))*2;   
    };
    $(window).resize(resize);
    resize();
    
    //轮播
    var pageChange=function(idx){
      if(data.isOnbtn)
        return;
      if(idx>=-1&&idx<data.pLength&&idx!=data.curP&&data.isCan){ 
        $productBtns.removeClass("down");
        $xavDownload.removeClass("show");
        $xnetDownload.removeClass("show");
        data.isCan=false; 
        data.cNum++; 
        clearInterval(cId); 
        idx=idx==-1?data.pLength-1:idx;     
        $controls.removeClass("cur").eq(idx).addClass("cur");
        $pages.eq(data.curP).css({zIndex:0});
        $icLine.css({left:aDD*idx});
        // $footer.attr("class","footer f_color"+data.fColor[idx]);
        $pages.eq(idx).addClass("show").css({opacity:0,zIndex:1}).animate({opacity:1},400,function(){
          $pages.eq(data.curP).removeClass("show");
          $(this).addClass("show");
          data.isCan=true;
          data.curP=idx; 
          data.cNum--; 
          if(data.cNum==0){
            cId=setInterval(function(){
              pageChange((data.curP+1)%data.pLength);
            },data.dur);   
          }  
        });
      }
    }
    pageChange(0)
    $controls.on("mouseenter",function(){
      data.isCan=true;
      pageChange($controls.index(this));
      $icLine.css({left:aDD*$controls.index(this)});
      data.isOnbtn=true;
    }).on("mouseleave",function(){
      data.isOnbtn=false;
    }).on("click",function(){
      if($(this).hasClass("btn_xnet9")){
        $xnetDownload.toggleClass("show");
        $productBtns.toggleClass("down");
        bottomHide();
      }
      if($(this).hasClass("btn_xav")){
        $xavDownload.toggleClass("show"); 
        $productBtns.toggleClass("down");
        bottomHide();
      }
    })

    //底部下载区出现时不轮播
    $xnetDownload.on("mouseenter",function(){
      data.isOnbtn=true;
    }).on("mouseleave",function(){
      data.isOnbtn=false;
    });
    $xavDownload.on("mouseenter",function(){
      data.isOnbtn=true;
    }).on("mouseleave",function(){
      data.isOnbtn=false;
    });

    //底部操作
    var isBottom=false;
    var bAni;
    var bottomHide=function(){
      if(isBottom){
        isBottom=false;
        if(bAni)
          clearTimeout(bAni),bAni=null;
        $footer.removeClass("show");
        $productBtns.removeClass("show");
        $rptBg.removeClass("show");
      }    
    }
    var bottomShow=function(){
      if($productBtns.hasClass("down"))
        return;
      if(!isBottom){
        isBottom=true;
        $footer.addClass("show");
        $productBtns.addClass("show");
        $rptBg.addClass("show");
        if(bAni)
          clearTimeout(bAni);
        bAni=setTimeout(bottomHide,2000);
      }
    }
    $footer.on("mouseenter",function(){
      if(bAni)
        clearTimeout(bAni),bAni=null;
    });
    $footer.on("mouseleave",function(){
      if(bAni)
        clearTimeout(bAni);
      bAni=setTimeout(bottomHide,2000);
    });


    //导航事件
    $("#nav_more").on("mouseenter",function(){
      $moreNav.addClass("show");
    });
    $moreNav.on("mouseleave",function(){
      $moreNav.removeClass("show");
      $hBdot.css({left:-9999,top:106});
    })
    $hNavli.on("mouseenter",function(){
      $hBdot.css({left:18,top:106+$hNavli.index(this)*69});
    });
    $hNav.on("mouseleave",function(){
      $hBdot.css({left:-9999});
    });
    $hSubnav.find("dt").on("mouseenter",function(){
      $hBdot.css({left:18});
      $hSdot.css({left:-9999});
    });
    $hSubDD.on("mouseenter",function(){
      $hSdot.css({left:18,top:53+$hSubDD.index(this)*44});
      $hBdot.css({left:-9999});
    });
    $hSubnav.on("mouseleave",function(){
      $hSdot.css({left:-9999});
    });    
  })();
