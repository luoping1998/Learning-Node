var http = require('http');
var url = 'http://jyc.xupt.edu.cn/';     //西邮教务系统网址
var cheerio = require('cheerio');
var fs = require('fs');

function filterAnnoucement(html) {
	var $ = cheerio.load(html);
	var announcement = $('#scrollup1jsu2js')[0];
 
	// [{
	// 	href:'',
	// 	title:'',
	// 	date:''
	// }]
	// 
	// 从html中分析出公告
	var Data = [];

	var announces = $('.winstyle17969').find('tr');

	announces.each(function (item) {
		var announce = $(this);

		var announceTitle = announce.find('a').text();
		var announceDate = announce.find('.timestyle17969').text();
		var announceHref = announce.find('a').attr('href');
		
		var announceData = {
			announceTitle: announceTitle,
			announceDate: announceDate,
			announceHref: announceHref
		}

		Data.push(announceData);
	})
	return Data;
}

function writeAnnounceInfo(Data) {
	var info = '';
	Data.forEach( function(item) {
		var title = item.announceTitle;
		var href = item.announceHref;
		var date = item.announceDate;

		info += '[ title : ' + title + ', href : ' + href +' ,date :'+date +' ]\t';
	})
	
	fs.writeFile('data.txt',info,function(){
			console.log('It saved');
	})
}

http.get(url, function (res) {
	var html = '';

	res.on('data', function (data) {
		html +=data;
	})

	res.on('end', function (){
		var Data = filterAnnoucement(html);
		writeAnnounceInfo(Data);            //将公告爬出来存在data.txt中
	})
}).on('error',function () {
	console.log('获取数据失败！');
})