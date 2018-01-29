
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});

/*
上面的代码使用then方法，依次指定了两个回调函数。
第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

采用链式的then，可以指定一组按照次序调用的回调函数。
这时，前一个回调函数，有可能返回的还是一个Promise对象（即有
异步操作），这时后一个回调函数，就会等待该Promise对象的状态
发生变化，才会被调用。

上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise
对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise
对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为
rejected，就调用funcB。
 */
