window.onload = function(){
	getCode();
	$('#codeImg').click(getCode);

	$("#toLog").click(getInfor);


	$("#web").click(function(){
		if(window.infor){
			signup($("#web").val(),window.infor);
		} else{
			alert('您未登录！');
		}
	});

}
