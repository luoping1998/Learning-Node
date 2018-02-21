function signup(group,infor){
	if(exist(infor.xh)){
		alert('您已报过名！');
	} else{
		//exist(infor.xh);
		$.ajax({
			url : "http://localhost:8080/users/sign_up",
			type : "post",
			data : {
				'infor' : JSON.stringify(infor),
				'group' : group
			},
			dataType : 'json' ,
			success : function(r){
				if(r.error) {
					//报错
					alert('error:'+r.result);
				}else{
					//获取信息 
					alert('报名成功！');
				}
			},
			error : function(){
				alert("Server error!");
			}
		});
	}
}