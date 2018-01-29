var ms;
var wait = new Promise(function(resolve ,reject) {
	resolve(setTimeout(resolve, ms));
	}
);

wait.then(function () {
	console.log(4);
});

Promise.resolve()
	   .then(function() {
	      	console.log(2);
	}).then(function (argument) {
		console.log(3);
	})
console.log(1); 

// 1, 2, 3, 4
// 控制台输出结果为1，4，2，3??????