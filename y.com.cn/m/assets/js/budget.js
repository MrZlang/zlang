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
	  	var topprice=1900;//吊柜1.2米内单价
		var top2price=1300;//超过1.2米单价
		var botprice=1900;//地柜3米内单价
		var bot2price=1500;//超过一米单价
  		budget();
  	;
    break;
  case '2': 
  		var topprice=2150;//吊柜1.2米内单价
		var top2price=1900;//超过1.2米单价
		var botprice=2150;//地柜3米内单价
		var bot2price=2200;//超过一米单价
  		budget();
  	;
    break;
  case '3': 
  		var topprice=2380;//吊柜1.2米内单价
		var top2price=2100;//超过1.2米单价
		var botprice=2380;//地柜3米内单价
		var bot2price=2420;//超过一米单价
  		budget();
  	;
    break;
  case '4': 
  		var topprice=5950;//吊柜1.2米内单价
		var top2price=6000;//超过1.2米单价
		var botprice=5950;//地柜3米内单价
		var bot2price=7000;//超过一米单价
  		budget();
  	;
    break;
  default: window.location.href=("http://www.yixiaohang.com.cn/m/closet_budget_m.html");
}
function budget(){
		if(height>1.2){
	  		var dg=topprice*1.2+(height-1.2)*top2price;
	  	}else if(height<=1.2){
	  		var dg=topprice*height;
	  	};//吊柜价格
	  	if(width>3){
	  		var lg=botprice*3+(width-3)*bot2price;
	  	}else if(width<=3){
	  		var lg=botprice*width;
	  	};//地柜价格
		var price01=dg+lg;//总价格=吊柜价格+地柜价格
		var price02=(dg+lg)*1.2;
		var price03=(dg+lg)*1.5;
        	var price1=Math.round(price01);//四舍五入取整
        	var price2=Math.round(price02);
        	var price3=Math.round(price03);
  		console.log("price："+price01+"=吊柜："+dg+"+地柜："+lg);
  		document.getElementById("budget_a").innerHTML="经济预算：&#165;"+(price1-250)+"元~&#165;"+(price1+250)+"元";
      		document.getElementById("budget_b").innerHTML="经典预算：&#165;"+(price2-250)+"元~&#165;"+(price2+250)+"元";
     		document.getElementById("budget_c").innerHTML="豪华预算：&#165;"+(price3-250)+"元~&#165;"+(price3+250)+"元";
}