const path = require('path');

var str = 'c:\\wamp\\www\\a.html';

var obj = path.parse(str);

console.log(obj);

/*obj:
{
	dir:路径,
	base:文件名部分,
	ext:扩展名,
	name:文件名

}*/