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
// ���÷���
/*alert(GetQueryString("width"));
alert(GetQueryString("height"));*/
// ���������̨
console.log("width="+GetQueryString("width")+";"+"height="+GetQueryString("height")+";");
console.log("style="+GetQueryString("style"));
// ����ȫ�ֱ���
var width=GetQueryString("width");
var height=GetQueryString("height");
var style=GetQueryString("style");
switch (style) {
  case '1': 
	  	var aprice=699;//���ÿ��
		var bprice=799;//������
		var cprice=899;//�������
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
	var price_a=Math.round(budget_aa);//��������ȡ��
	var price_b=Math.round(budget_bb);
	var price_c=Math.round(budget_cc);
	//console.log(budget_aa);
	document.getElementById("budget_a").innerHTML="����Ԥ�㣺&#165;"+price_a+"Ԫ="+"����"+width+"��&nbsp;+&nbsp;"+"��"+height+"�ף�";
	document.getElementById("budget_b").innerHTML="����Ԥ�㣺&#165;"+price_b+"Ԫ="+"����"+width+"��&nbsp;+&nbsp;"+"��"+height+"�ף�";
	document.getElementById("budget_c").innerHTML="����Ԥ�㣺&#165;"+price_c+"Ԫ="+"����"+width+"��&nbsp;+&nbsp;"+"��"+height+"�ף�";
}