function existInfor(db,username,callback){
	var str = 'SELECT `id` FROM `freshtable` WHERE `stusID` = \''+username+'\'';
	db.query(str,function(err,data){
		if(err){
			callback({
				'error' : true,
				'result' : err
			})
		}else{
			callback({
				'error' : false,
				'id' : data
			})
		}
	})
}

module.exports = existInfor;