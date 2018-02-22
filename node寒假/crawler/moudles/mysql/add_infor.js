function addInfor(db,group,infor,contact,callback){
	var infor = JSON.parse(infor);
	var contact = JSON.parse(contact);
	var str = 'INSERT INTO `freshtable` ( `stusID`, `name`, `sex` ,`college`, `major`, `class`, `grade`, `group`, `phone` ,`email` , `lines` , `interview`) VALUES ( \''+infor.xh+'\',\''+infor.xm+'\',\''+infor.xb +'\',\''+infor.xy+'\' , \''+infor.zy+'\',\''+infor.bj+'\', '+infor.nj+' ,\''+group+'\','+contact.phone+',\''+contact.email+'\','+'\''+contact.lines+'\', 0)';
	db.query(str,function(err,data){
		console.log(str);
		if(err){
			callback({
				'error' : true,
				'result' : err
			})
		}else{
			callback({
				'error' : false,
				'result' : '报名成功！'
			})
		}
	})
}

module.exports = addInfor;