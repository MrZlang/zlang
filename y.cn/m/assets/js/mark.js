// function mark(aForm) {
//     if(aForm.q.value=='') {
//                 alert("请输入搜索内容!");
//                 aForm.q.focus();
//                 return false;
//     }
//     if(aForm.q.value.length<2) {
//                 alert("请输入至少两个字符!");
//                 aForm.q.focus();
//                 return false;
//     }
//          return true;
// }

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
 	var tel = $("#m_details_phone").val().trim();
	if(tForm.m_details_name.value=='') {
                alert("请输入您的姓名!");
                tForm.m_details_name.focus();
                return false;
	}
       if(tForm.m_details_phone.value==''){
                alert("请输入您的手机号!");
                tForm.m_details_phone.focus();
                return false;
	}
	if(!isNum(tel) || !isTel(tel)){
                alert("请输入正确的手机号!");
                tForm.m_details_phone.focus();
                return false;
	}
	if(tForm.m_details_region.value=='') {
                alert("请输入您的小区地址!");
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
    		console.log(dateStr);     //输出时间
}
