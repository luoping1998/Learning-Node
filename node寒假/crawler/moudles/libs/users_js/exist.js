var e;

function exist(atrr,value){
	$.ajax({
		url : "http://localhost:8080/users/exist",
		type : "post",
		async : false,
		data : {
			'atrr' : atrr,
			'value' : value 
		},			
		dataType : 'json' ,
		success : function(r){
			if(r.error){
				console.log('Server error!');
			}else{
				if(r.id.length !== 0){
					e = true;
				} else{
					e = false;
				}
			}
		},
		error : function(){
			alert("Server error!");
		}
	});
	return e;
}