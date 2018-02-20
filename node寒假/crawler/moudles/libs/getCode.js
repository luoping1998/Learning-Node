function getCode(){
	$.ajax({
		url : "http://localhost:8080/users/vcode",
		type : "get",
		dataType: 'jsonp', 
		success : function(data){
			if(data.err){
				alert('suc:error!');
			} else{
				$('#codeImg').attr("src",data.vcode);
				window.sess = data.sess;
			}
		},
		error : function(){
			alert("Server error!");
		}
	});
}