// function mark(aForm) {
//     if(aForm.q.value=='') {
//                 alert("��������������!");
//                 aForm.q.focus();
//                 return false;
//     }
//     if(aForm.q.value.length<2) {
//                 alert("���������������ַ�!");
//                 aForm.q.focus();
//                 return false;
//     }
//          return true;
// }

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
 	var tel = $("#m_details_phone").val().trim();
	if(tForm.m_details_name.value=='') {
                alert("��������������!");
                tForm.m_details_name.focus();
                return false;
	}
       if(tForm.m_details_phone.value==''){
                alert("�����������ֻ���!");
                tForm.m_details_phone.focus();
                return false;
	}
	if(!isNum(tel) || !isTel(tel)){
                alert("��������ȷ���ֻ���!");
                tForm.m_details_phone.focus();
                return false;
	}
	if(tForm.m_details_region.value=='') {
                alert("����������С����ַ!");
                tForm.m_details_region.focus();
                return false;
	}
         return true;
}
window.onload = function(){
var nowDate = new Date();
var dateStr = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
if(document.getElementById("m_details_date").value==""){
            document.getElementById("m_details_date").value=dateStr;
            }
    		console.log(dateStr);     //���ʱ��
}
