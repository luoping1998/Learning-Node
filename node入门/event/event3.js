var events = require("events");
var eventEmitter = new events.EventEmitter();

//监听器#1
var listener1 = function listener1(){
	console.log("listener1 running .");
}

//监视器#2
var listener2 = function listener2(){
	console.log("listener2 running .");
}

//绑定 connectyion 事件 处理listener1
eventEmitter.addListener("connection", listener1);

//绑定 connectyion 事件 处理listener2
eventEmitter.on("connection", listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners + "listeners");

//触发connection 事件
eventEmitter.emit("connection");

//移除监听绑定的listener1 函数
eventEmitter.removeListener("connection", listener1);
console.log("listener1 removed .");

//再次触发connection 事件
eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners + "listeners .");

console.log("end .");
