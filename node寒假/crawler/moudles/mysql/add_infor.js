function addInfor(db,group,infor,callback){
	var infor = JSON.parse(infor);
	var str = 'INSERT INTO `freshtable` ( `stusID`, `name`, `college`, `major`, `class`, `grade`, `group`, `1_interview`, `2_interview`, `3_interview`) VALUES ( \''+infor.xh+'\',\''+infor.xm+'\',\'' +infor.xy+'\' , \''+infor.zy+'\',\''+infor.bj+'\', '+infor.nj+' ,\''+group+'\', 0 , 0 , 0 )';
	db.query(str,function(err,data){
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