function signup(group,infor,contact){
	if(exist('stusID',infor.xh)){
		alert('您已报过名！');
	} else{
		//exist(infor.xh);
		$.ajax({
			url : "http://localhost:8080/users/sign_up",
			type : "post",
			data : {
				'infor' : JSON.stringify(infor),
				'group' : group,
				'contact' : JSON.stringify(contact)
			},
			dataType : 'json' ,
			success : function(r){
				if(r.error) {
					//报错
					alert('error:'+JSON.stringify(r.result));
				}else{
					//获取信息 
					$('#infor').attr('display','none');
					alert('报名成功！');
				}
			},
			error : function(){
				alert("Server error!");
			}
		});
	}
}

function check(contact){
	if(contact.phone&&contact.email&&contact.lines){
		return true;
	}
	return false;
}