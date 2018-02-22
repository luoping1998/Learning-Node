window.onload = function(){
	getCode();
	
	//获取验证码
	$('#codeImg').click(getCode);

	//登录
	$("#toLog").click(getInfor);

	//报名
	$("#signup input").click(function(e){
		e.preventDefault();
		var contact = {
			'phone' : $('#phone').val(),
			'email' : $('#email').val(),
			'lines' : $('#lines').val() 
		};

		if(window.infor){
			if(check(contact)){
				signup($(this).val(),window.infor,contact);
			}else{
				alert('请完善信息！');
			}
		} else{
			alert('您未登录！');
		}
	});

}
