/*表单验证*/
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
 function check(tForm) {
 	var tel = $("#mobilephone").val().trim();
	if(tForm.mobilename.value=='') {
                alert("请输入您的姓名!");
                tForm.mobilename.focus();
                return false;
	}
             if(tForm.mobilephone.value==''){
                alert("请输入您的手机号!");
                tForm.mobilephone.focus();
                return false;
	}
	if(!isNum(tel) || !isTel(tel)){
                alert("请输入正确的手机号!");
                tForm.mobilephone.focus();
                return false;
	}
         return true;
}
window.onload = function(){
var nowDate = new Date();
var dateStr = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
if(document.getElementById("mobiledate").value==""){
            document.getElementById("mobiledate").value=dateStr;
            }
    		console.log(dateStr);     //输出时间
}