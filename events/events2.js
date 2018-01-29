var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 
// 11 sleep listeners added. Use emitter.setMaxListeners() to increase limit

//emitter.setMaxListeners(11);    
//                 //仅仅将emitter实例的默认最大回调函数数改成11，否则默认为10

emitter.on('sleep', function() {
	console.log(1);
})

emitter.on('sleep', function() {
	console.log(2);
})

emitter.on('sleep', function() {
	console.log(3);
})

emitter.on('sleep', function() {
	console.log(4);
})

emitter.on('sleep', function() {
	console.log(5);
})

emitter.on('sleep', function() {
	console.log(6);
})

emitter.on('sleep', function() {
	console.log(7);
})

emitter.on('sleep', function() {
	console.log(8);
})

emitter.on('sleep', function() {
	console.log(9);
})

emitter.on('sleep', function() {
	console.log(10);
})

emitter.on('sleep', function() {
	console.log(11);
})

emitter.emit('sleep');