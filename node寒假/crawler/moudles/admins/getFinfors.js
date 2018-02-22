function getFinfor(db, group, interview, callback){

	if(interview!=undefined){
		var str = 'SELECT * FROM `freshtable` WHERE `group` = '+'\''+group+'\' And `interview` = '+interview;

		if(group == 'all'){
			str = 'SELECT * FROM `freshtable` WHERE `interview` = '+interview;
			}
	}else{
		var str = 'SELECT * FROM `freshtable` WHERE `group` = '+'\''+group+'\'';

		if(group == 'all'){
			str = 'SELECT * FROM `freshtable`';
		}
	}
	console.log(str);
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
				'infors' : data
			})
		}
	})
}

module.exports = getFinfor;