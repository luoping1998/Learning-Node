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
		var reObj = null;
		if(!err&&(body.indexOf('Object moved')!==-1)){
			reObj={
				error:false,
				result:'login success'
			};
		}else if(body.indexOf('Object moved')===-1){
			var html = iconv.decode(body,'gb2312').toString();		//防止中文乱码
			var $ = cheerio.load(html);		//加载html
			var result = $('script');	//取script标签
			result = result[result.length-1].children[0].data;
			result = result.substring(reason.indexOf('(')+2,reason.indexOf(')')-1);
			reObj={
				error:true,
				result:result
			}
		}else{
			reObj={
				error:true,
				result:'error unexpected'
			}
		}
		callback(reObj);
	});
}

module.exports=userLogin;