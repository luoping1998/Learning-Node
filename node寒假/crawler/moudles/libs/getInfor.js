function getInfor(){
	$.ajax({
		url : "http://localhost:8080/users/login",
		type : "post",
			data : {
			username : $('#username').val(),
			password : $('#pass').val(),
			verCode : $('#vcode').val(),
			session :window.sess
		},
		dataType : 'json' ,
		success : function(r){
			if(r.error) {
				//报错
				alert(r.result);
				getCode();
			}else{
				//获取信息 
				window.infor = r;
				console.log(typeof(window.infor));
				$('#login').css('display','none');
			}
		},
		error : function(){
			console.log("infor : Server error!");
		}
	});
}