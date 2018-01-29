var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'测一下'
});

var options = {
	hostname: 'blog.csdn.net',
	port: 80,
	path:'u011127019/comment/submit',
	method:'POST',
	headers:{
		'Accept':'*/*',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Content-Length':'55',
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'bdshare_firstime=1497085697238; uuid_tt_dd=-1633115773283581886_20170610; __utma=17226283.448408281.1500197580.1500197580.1500197580.1; __utmz=17226283.1500197580.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); cache_cart_num=0; shown_offset=8; ADHOC_MEMBERSHIP_CLIENT_ID1.0=58829ba2-151d-3bf0-65ca-b1bc7a56b9cd; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=1788*1*PC_VC; __message_district_code=610000; __message_sys_msg_id=0; __message_gu_msg_id=0; __message_cnel_msg_id=0; __message_in_school=0; UserName=Beng_shakalaka; UserInfo=npIfADKjp80J1CuKkwhl9GTuKFIZ2Oj9H3mZb451661BC9vXJMHbYP4S4qviwhVnOcIrL%2FIWH5QTO8hs%2BtPuSl76dfmDBb1UJydSawCtSGMWM6F79VzobaFQmYe0Vy5cJfaJd%2BIej1EselFHkqK0Uw%3D%3D; UserNick=Beng_shakalaka; AU=32B; UD=fighting; UN=Beng_shakalaka; UE="632694871@qq.com"; BT=1512889552025; access-token=abb87fca-3463-4526-8b65-754ed8e34ea5; uuid=206b33d0-1bd9-4327-b77b-7dea346325a7; avh=52383738; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1512639352,1512644667,1512650822,1512887629; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1512889558; dc_tos=p0qh1z; dc_session_id=10_1512887625863.165796',
		'Host':'blog.csdn.net',
		'Origin':'http://blog.csdn.net',
		'Proxy-Connection':'keep-alive',
		'Referer':'http://blog.csdn.net/u011127019/article/details/52383738',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var request = http.request(options, function (respose) {
	console.log('Status: ' + respose.StatusCode);
	console.log('headers: ' + JSON.stringify(respose.headers));

	respose.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	respose.on('end',function () {
		console.log('评论完毕');
	})
})

request.on('error', function (error) {
	console.log('error!');
});

request.write(postData);
request.end();