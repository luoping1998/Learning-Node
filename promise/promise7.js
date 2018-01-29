/*resolve vs reject */

var p1 = new Promise(function(resolve, reject){
  resolve(Promise.resolve(‘resolve‘));
});

var p2 = new Promise(function(resolve, reject){
  resolve(Promise.reject(‘reject‘));
});

var p3 = new Promise(function(resolve, reject){
  reject(Promise.resolve(‘resolve‘));
});

p1.then(
  function fulfilled(value){
    console.log(‘fulfilled: ‘ + value);
  }, 
  function rejected(err){
    console.log(‘rejected: ‘ + err);
  }
);

p2.then(
  function fulfilled(value){
    console.log(‘fulfilled: ‘ + value);
  }, 
  function rejected(err){
    console.log(‘rejected: ‘ + err);
  }
);

p3.then(
  function fulfilled(value){
    console.log(‘fulfilled: ‘ + value);
  }, 
  function rejected(err){
    console.log(‘rejected: ‘ + err);
  }
);

/*console:
	p3 rejected: [object Promise]
	p1 fulfilled: resolve
	p2 rejected: reject
 */

/*
	Promise回调函数中的第一个参数resolve，会对Promise执行"拆箱"动作。
	即当resolve的参数是一个Promise对象时，resolve会"拆箱"获取这个
	Promise对象的状态和值，但这个过程是异步的。p1"拆箱"后，获取到
	Promise对象的状态是resolved，因此fulfilled回调被执行；
	p2"拆箱"后，获取到Promise对象的状态是rejected，因此rejected
	回调被执行。但Promise回调函数中的第二个参数reject不具备”拆箱“
	的能力，reject的参数会直接传递给then方法中的rejected回调。因此，
	即使p3 reject接收了一个resolved状态的Promise，then方法中被调用
	的依然是rejected，并且参数就是reject接收到的Promise对象。


 */