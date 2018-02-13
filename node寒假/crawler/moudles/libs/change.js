function chSession(str){
	var arr = str.split(',');
	var ss = arr[1]+'='+arr[2];
	return ss;
}

function chOthers(str){
	var arr = str.split(',');
	var ss = arr[1];
	return ss;
}

var change = {
	chSession : chSession,
	chOthers : chOthers
};

module.exports=change;