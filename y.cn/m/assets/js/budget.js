function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var myurl=GetQueryString("url");
if(myurl !=null && myurl.toString().length>1)
{
   alert(GetQueryString("url"));
}
// 调用方法
/*alert(GetQueryString("width"));
alert(GetQueryString("height"));*/
// 输出到控制台
console.log("width="+GetQueryString("width")+";"+"height="+GetQueryString("height")+";");
console.log("style="+GetQueryString("style"));
// 定义全局变量
var width=GetQueryString("width");
var height=GetQueryString("height");
var style=GetQueryString("style");
switch (style) {
  case '1': 
	  	var aprice=699;//经济款单价
		var bprice=799;//经典款单价
		var cprice=899;//豪华款单价
		price();
  	;
    break;
  case '2': 
  		var aprice=899;
		var bprice=1000;
		var cprice=1200;
		price();
  	;
    break;
  case '3': 
  		var aprice=800;
		var bprice=1000;
		var cprice=1300;
		price();
  	;
    break;
  case '4': 
  		var aprice=800;
		var bprice=1500;
		var cprice=2500;
		price();
  	;
    break;
  default: window.location.href=("http://www.yixiaohang.cn/m/closet_budget_m.html");
}
function price(){
	var budget_aa=aprice*width*height;
	var budget_bb=bprice*width*height;
	var budget_cc=cprice*width*height;
	var price_a=Math.round(budget_aa);//四舍五入取整
	var price_b=Math.round(budget_bb);
	var price_c=Math.round(budget_cc);
	//console.log(budget_aa);
	document.getElementById("budget_a").innerHTML="经济预算：&#165;"+price_a+"元="+"（宽"+width+"米&nbsp;+&nbsp;"+"高"+height+"米）";
	document.getElementById("budget_b").innerHTML="经典预算：&#165;"+price_b+"元="+"（宽"+width+"米&nbsp;+&nbsp;"+"高"+height+"米）";
	document.getElementById("budget_c").innerHTML="豪华预算：&#165;"+price_c+"元="+"（宽"+width+"米&nbsp;+&nbsp;"+"高"+height+"米）";
}