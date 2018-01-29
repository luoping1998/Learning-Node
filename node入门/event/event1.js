//引入event模块
var events = require("events");
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

//创建时间处理程序
var connectHandler = function connected() {
	console.log("connect successed.");

	//触发 data_received 事件
	eventEmitter.emit("data_received");
};

//绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on("data_received",function(){
	console.log("data received successed .");
});

//触发 connection 事件
eventEmitter.emit("connection");

console.log("end .");