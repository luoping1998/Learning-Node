var request = require('request');
const cheerio =require('cheerio');
const iconv = require('iconv-lite');

var getInfor = function(username,session,callback){
	var url = 'http://222.24.62.120/xsgrxx.aspx?xh='+username;

	var options = {
		url : url,
		encoding : null,
		method : 'GET',
		headers : {
			'Cookie':session,
			'Referer':'http://222.24.62.120/'
		}
	}

	request(options,function(err,res,body){
		var infor = null;
		if(!err){
			var html = iconv.decode(body,'gb2312').toString();
			var $ = cheerio.load(html);
		
			infor = {
				'error':false,
				'xh' : $('#xh').text(),
				'xm' : $('#xm').text(),
				'xb' : $('#lbl_xb').text(),
				'xy' : $('#lbl_xy').text(),
				'zy' : $('#lbl_zymc').text(),
				'bj' : $('#lbl_xzb').text(),
				'nj' : $('#lbl_dqszj').text()
			}
		}else{
			infor = {
				'error' : true,
				'data': err
			}
		}
		callback(infor);
	});
}

module.exports = getInfor;
/*

xh：学号
xm：姓名
lbl_xy：学院
lbl_zymc：专业
lbl_xzb：班级
lbl_dqszj：当前所在级

 */