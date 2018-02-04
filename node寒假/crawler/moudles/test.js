var getImg = require('./users/crawl_img');
var err ,data;
var img = getImg(function(err,data){
	if(err){
		console.log('error!');
	}
	console.log(data);
})