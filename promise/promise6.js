//需要注意的是，立即resolve的 Promise 对象，
//是在本轮“事件循环”（event loop）的结束时，
//而不是在下一轮“事件循环”的开始时。


setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

/*
上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
Promise.resolve()在本轮“事件循环”结束时执行，
console.log('one')则是立即执行，因此最先输出。
 */


/*
Promise.reject()方法的参数，会原封不动地作为reject的理由，
变成后续方法的参数。这一点与Promise.resolve方法不一致。
 */

var thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};

Promise.reject(thenable)
	   .catch(function (e) {
	   		console.log(e === thenable)
		});

//上面代码中，Promise.reject方法的参数是一个thenable对象，
//执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串
//而是thenable对象。