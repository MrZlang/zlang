var fullscreen=function(){

  //默认第一张图片显示
  var controls=document.getElementsByName("full_sets");
  var flagNum=0;
  for(var i=0;i<controls.length;i++)//这里是length还是count记不清了
  {
	  if(controls[i].className=="full_sets on")
	  {
		  flagNum++;
	  }
  }
  if(flagNum<1){
	  controls[0].className="full_sets on";
  }

  var el = document.documentElement;

  var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||el.mozRequestFullScreen || el.msRequestFullScreen;

  if(typeof rfs != "undefined" && rfs) {
    rfs.call(el);
  }else if(typeof window.ActiveXObject != "undefined") {
    var wscript = new ActiveXObject("WScript.Shell");
    if(wscript != null) {
        wscript.SendKeys("{F11}");
    }

  }
}


var exitFullscreen=function(){
    var elem=document;
    if(elem.webkitCancelFullScreen){
        elem.webkitCancelFullScreen();    
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen();
    }else if(elem.cancelFullScreen){
        elem.cancelFullScreen();
    }else if(elem.exitFullscreen){
        elem.exitFullscreen();
    }else{
        //浏览器不支持全屏
    }
	//fullscreen();
};

document.onkeydown=function(event){
	  var e = event || window.event || arguments.callee.caller.arguments[0];
	 if(e && e.keyCode==27){ // 按 Esc 
		 fullscreen();
	   }
 }; 
