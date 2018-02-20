var sess;
function getCode(){
	$.ajax({
		url : "http://localhost:8080/users/vcode",
		type : "get",
		//jsonp : "callback",
		dataType: 'jsonp', 
		success : function(data){
			if(data.err){
				alert('suc:error!');
			} else{
				$('#codeImg').attr("src",data.vcode);
				sess = data.sess;
			}
		},
		error : function(){
			alert("Server error!");
			getCode();
		}
	});
}

window.onload = function(){
	var infor = null ;

	getCode();

	$('#codeImg').click(getCode);

	$("#toLog").click(function(){
		$.ajax({
			url : "http://localhost:8080/users/login",
			type : "post",
			//contentType:"application/json; charset=utf-8",
			data : {
				username : $('#username').val(),
				password : $('#pass').val(),
				verCode : $('#vcode').val(),
				session :sess
			},
			//dataType : 'jsonp' ,
			success : function(r){
				console.log(r);
			},
			error : function(){
				console.log("infor : Server error!");
			}
		});
	})

}
