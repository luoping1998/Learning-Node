/*
Promise对象是一个构造函数，用来生成Promise实例。
Promise 新建后就会立即执行
1）对象的状态不受外界影响 
2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。
*/

/*
缺点:
1)无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2)如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3)当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
*/

/*
resolve函数的作用是:
将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

reject函数的作用是:
将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
*/

/*
then方法可以接受两个回调函数作为参数。
第一个回调函数是Promise对象的状态变为resolved时调用，
第二个回调函数是Promise对象的状态变为rejected时调用。
其中，第二个函数是可选的，不一定要提供。
这两个函数都接受Promise对象传出的值作为参数。
 */

var one =new Promise(function (resolve, reject) {
	console.log('Promise');
	resolve();
});

one.then(function () {
	console.log('resolved');
});

console.log('Hi!');

// Promise
// Hi!
// resolved