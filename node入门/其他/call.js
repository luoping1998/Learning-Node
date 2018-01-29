// function a(callback)   
// {      
//    console.log("我是parent函数a！");   
//     console.log("调用回调函数");   
//     callback();   
// }   
// function b(){   
// console.log("我是回调函数b");   
  
// }   
// function c(){   
// console.log("我是回调函数c");   
  
// }   
  
// function test()   
// {   
//     a(b);   
//    a(c);   
// }   

// test();
// 
// 
// 
var localData = {
    id: 094545,
    name :"nothing",
    //setUsrName是一个在clientData对象中的方法
    setName: function (name){
        //这指向了对象中的fullName属性
        this.name = name;
    }
}
 
// function getName(name, callback){
//     callback(name);
// }

// getName("Tom",localData.setName);
// console.log(localData.name);
// console.log(window.name);
// 
function getName(name, callback, callObj){
    callback.apply(callObj, [name]);
    //callback.call(callObj, name);
}

getName("Tom", localData.setName,localData)
console.log(localData.name);           //Tom

