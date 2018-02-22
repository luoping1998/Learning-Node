var request = require('request');

var getImg = function(callback){
	var url = 'http://222.24.62.120/CheckCode.aspx';
	var options = {
		url:url,
		method:'GET',
		encoding:null,
		Accept : "image/webp,image/*,*/*;q=0.8",
		headers: {
			Referer: 'http://222.24.62.120/'
		}
	};

	request(options,function (err, res, body) {
		if(err){
			callback('Server error!'+err);
			return;
		}
		var session = res.headers['set-cookie'][0];		//获取cookies
			session = session.substr(0,session.indexOf(";"));	//截取到path之前
		if(!session){
			callback('Server error!');
			return ;
		}
		var imgBuf = body.toString('base64');
		imgBuf = "data:image/Gif;base64," + imgBuf;
		callback(false, {
	    	'session' : session,
	    	'imgCode' : imgBuf
	    });	
	})
}

module.exports=getImg;

/*
callback(err,data);

err:错误
data:返回的内容
*/