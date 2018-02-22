var infors = null;
function getFinfors(group,interview){
	$.ajax({
		url : "http://localhost:8080/admins/getinfors",
		type : 'post',
		data : {
			'group' : group,
			'interview' : interview
		},
		async : false,
		dataType : 'json',
		success : function(r){
			if(r.error){
				alert('suc:Server error!');
			}else{
				infors = r.infors;
			}
		},
		error : function(){
			alert('Server error!');
		}
	});
	return infors;
}