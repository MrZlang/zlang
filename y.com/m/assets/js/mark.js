/*����֤*/
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
                alert("��������������!");
                tForm.mobilename.focus();
                return false;
	}
             if(tForm.mobilephone.value==''){
                alert("�����������ֻ���!");
                tForm.mobilephone.focus();
                return false;
	}
	if(!isNum(tel) || !isTel(tel)){
                alert("��������ȷ���ֻ���!");
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
    		console.log(dateStr);     //���ʱ��
}