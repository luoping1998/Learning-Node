var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();       //创建EventEmitter实例

function Sleep(who) {
	console.log(who +' is sleeping.');
}

emitter.on('sleep', Sleep);        //为emitter绑定事件sleep，回调函数为Sleep
emitter.removeListener('sleep',Sleep);
emitter.emit('sleep', 'Luoping');      //触发sleep事件
emitter.emit('sleep','Luoping');