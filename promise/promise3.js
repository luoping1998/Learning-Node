var promise = new Promise(function(resolve, reject ){
	resolve(1);
	console.log(2);
}).then(function (r) {
	console.log(r);
})

//2,1

//注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
//上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，
//并且会首先打印出来。
//这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，
//总是晚于本轮循环的同步任务。

//一般来说，调用resolve或reject以后，Promise 的使命就完成了，
//后继操作应该放到then方法里面，
//而不应该直接写在resolve或reject的后面。
//所以，最好在它们前面加上return语句，这样就不会有意外。

/*
var promise = new Promise(function(resolve, reject ){
	return resolve(1);
	console.log(2);
}).then(function (r) {
	console.log(r);
})
*/