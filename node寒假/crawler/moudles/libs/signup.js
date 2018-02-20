function signup(group){
	$.ajax({
		url : "http://localhost:8080/users/sign_up",
		type : "post",
		data : {
			infor : window.infor,
			group : group
		},
		dataType : 'json' ,
		success : function(r){
			if(r.error) {
				//报错
				console.log(r);
			}else{
				//获取信息 
				console.log(r);
			}
		},
		error : function(){
			console.log("infor : Server error!");
		}
	});
}