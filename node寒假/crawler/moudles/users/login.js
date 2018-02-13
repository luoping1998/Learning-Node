var request = require('request');
const cheerio =require('cheerio');
const iconv = require('iconv-lite');

var userLogin = function(username,password,verCode,session,callback){
	var url = 'http://222.24.62.120/default2.aspx';
	var options = {
		url:url,
		method:"POST",
		encoding:null,
		headers:{
			'Cookie':session,
			'Referer':'http://222.24.62.120/',
		},
		form:{
			'__VIEWSTATE':'dDwxNTMxMDk5Mzc0Ozs+lYSKnsl/mKGQ7CKkWFJpv0btUa8=',
			'txtUserName':username,
			'Textbox1':'',
			'TextBox2':password,
			'txtSecretCode':verCode,
			'RadioButtonList1':'(unable to decode value)',
			'Button1':'',
			'lbLanguage':'',
			'hidPdrs':'',
			'hidsc':''
		}
	}

	request(options,function(err, res, body){
		var result = null;
		if(!err&&(body.indexOf('Object moved')!==-1)){
			result={
				error:false,
				result:'登录成功！'
			};
		}else if(body.indexOf('Object moved')===-1){
			var html = iconv.decode(body,'gb2312').toString();		//防止中文乱码
			var $ = cheerio.load(html);		//加载html
			var reason = $('script');	//取script标签
			reason = reason[reason.length-1].children[0].data;
			reason = reason.substring(reason.indexOf('(')+2,reason.indexOf(')')-1);
			result={
				error:true,
				result:reason
			}
		}else{
			result={
				error:true,
				result:'未知错误！'
			}
		}
		callback(result);
	});
}

module.exports=userLogin;