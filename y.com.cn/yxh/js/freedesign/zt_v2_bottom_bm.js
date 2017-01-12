function popup(popupName) {
    popupName.css({
        "display": "block"
    })
}
function in_array(needle, haystack) {
    for (key in haystack) {
        if (haystack[key] == needle) {
            return true
        }
    }
    return false
}
function setSelectList(cityOptions) {
    var i = 0,
    len = cityOptions.length / 2,
    html = "";
    for (; i < len; i++) {
        var val = cityOptions[i * 2 + 1],
        txt = cityOptions[i * 2];
        html += '<option value="' + val + '">' + txt + '</option>'
    }
    return html
}
function changeProvince0(id, check) {

$.post("/zhixiao/getcityinfo.php",
		{
			 action:'OK',
			 id:id
		},
		function(d,s){
				 if(s=="success"){
					 
					var rd = new Array();
					rd = d.split("@");

					var province_success = rd[0].split(",");
					
    old_province = $("#province0").find("option:selected").text();
	cityOptions = ["", ""];
   
	if (!in_array(id, province_success)) {	
        $("#province").get(0).selectedIndex = 0;
       // changeProvince($("#province").val(), 1);
        //changeCity($("#city").val());			
        $("#bmq_tc_city").html("省份<strong>" + old_province + "</strong>");
        popup($("#bmq_tc"));
        return
    }

				if(rd[1])
				var cityOptions = rd[1].split(",");
				var html = setSelectList(cityOptions);
    $("#city0").html(html);
    changeCity0($("#city0").val())
				 }

		}
 );

    
}
function changeCity0(id) {

$.post("/zhixiao/getareainfo.php",
		{
			 action:'OK',
			 id:id
		},
		function(d,s){
				 if(s=="success"){
					 
					var rd = new Array();
					rd = d.split("@");

					var city_success = rd[0].split(",");
	old_city = $("#city0").find("option:selected").text();
    areaOptions = ["区县", "区县"];
    if (!in_array(id, city_success)) {
        $("#city0").get(0).selectedIndex = 0;
        changeCity0($("#city0").val());
        $("#bmq_tc_city").html("城市<strong>" + old_city + "</strong>");
        popup($("#bmq_tc"));
        return false
    }

				if(rd[1])
				var areaOptions = rd[1].split(",");
				
				 var html = setSelectList(areaOptions);
				$("#area0").html(html)
				 }

		}
 );

}

/* start.wx141031_01 */
function changeProvince1(id, check) {

	$.post("/zhixiao/getcityinfo.php",
			{
				 action:'OK',
				 id:id
			},
			function(d,s){
					 if(s=="success"){
						 
						var rd = new Array();
						rd = d.split("@");

						var province_success = rd[0].split(",");
						
					    old_province = $("#province1").find("option:selected").text();
						cityOptions = ["", ""];
					   
						if (!in_array(id, province_success)) {	
					        $("#province").get(0).selectedIndex = 0;
					       // changeProvince($("#province").val(), 1);
					        //changeCity($("#city").val());			
					        $("#bmq_tc_city").html("省份<strong>" + old_province + "</strong>");
					        popup($("#bmq_tc"));
					        return
					    }
				
						if(rd[1])
						var cityOptions = rd[1].split(",");
						var html = setSelectList(cityOptions);
					    $("#city1").html(html);
					    changeCity0($("#city1").val())
					 }

			}
	 );

	    
	}
	function changeCity1(id) {

	$.post("/zhixiao/getareainfo.php",
			{
				 action:'OK',
				 id:id
			},
			function(d,s){
					 if(s=="success"){
						 
						var rd = new Array();
						rd = d.split("@");

						var city_success = rd[0].split(",");
		old_city = $("#city1").find("option:selected").text();
	    areaOptions = ["区县", "区县"];
	    if (!in_array(id, city_success)) {
	        $("#city1").get(0).selectedIndex = 0;
	        changeCity0($("#city1").val());
	        $("#bmq_tc_city").html("城市<strong>" + old_city + "</strong>");
	        popup($("#bmq_tc"));
	        return false
	    }

					if(rd[1])
					var areaOptions = rd[1].split(",");
					
					 var html = setSelectList(areaOptions);
					$("#area0").html(html)
					 }

			}
	 );

	}
/* wx141031_01.end */

function chr() {
    var username = document.getElementById("username");
    var tel = document.getElementById("tel");
    var address = document.getElementById("address");
    var space = document.form1["post_data[space][]"];
    var oftime = document.form1["post_data[oftime1]"];
    document.getElmentById("submit_img").disabled = true;
    if (strim(username.value) == '') {
        alert('请输入您的姓名！');
        username.focus();
        document.getElmentById("submit_img").disabled = false;
        return false
    }
    if (isChn(username.value) == false) {
        alert('请输入您的中文姓名！');
        username.focus();
        document.getElmentById("submit_img").disabled = false;
        return false
    }
    if (strim(tel.value) == '') {
        alert('请输入您的手机！');
        tel.focus();
        document.getElmentById("submit_img").disabled = false;
        return false
    }
    if (! (/^1[3,5,8]\d{9}$/.test(tel.value))) {
        alert('请输入正确的手机号！');
        tel.focus();
        document.getElmentById("submit_img").disabled = false;
        return false
    }
    return true
}
function isChn(str) {
    var reg = /^[\u4E00-\u9FA5]+$/;
    if (!reg.test(str)) {
        return false
    }
    return true
}
function strim(str) {
    if (str.length > 0) {
        while ((str.substring(0, 1) == " ") && (str.length > 0)) {
            str = str.substring(1, str.length)
        }
        while (str.substring(str.length - 1, str.length) == " ") {
            str = str.substring(0, str.length - 1)
        }
    }
    return str
}
$(function() {
    changeProvince0($("#province0").val(), 0);
    $("#province0").change(function() {
        changeProvince0(this.value, 1)
    });
    $("#city0").change(function() {
        changeCity0(this.value)
    })
});