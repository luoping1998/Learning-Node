var mysql = require('mysql');
var db = mysql.createConnection({host:'localhost',user:'root',password:'luo...1998ping',database:'freshTable'});

function addInfor(group,infor,callback){
	str = 'INSERT INTO fresh (stusID,name,college,major,class,grade,group,1_interview,2_interview,3_interview) VALUES('+infor.xh+','+infor.xm+','+infor.xy+','+infor.zy+','+infor.bj+','+infor.nj+group+',0,0,0)';
	db.query(str,function(err,data){
		if(err){
			console.log('error!');
			callback({
				'error' : true,
				'result' : err
			})
		}else{
			callback({
				'error' : false,
				'result' : data
			})
			console.log('data:'+data);
		}
	})
}

// function delInfor(id){
// 	db.query('DELETE FROM `fresh` WHERE id='+id ,function(err,data){
// 		if(err){
// 			console.log('error!');
// 		}else{
// 			console.log(data);
// 		}
// 	})
// }

module.exports = addInfor;