var p3 = new Promise( function(resolve,reject){
	resolve( "B" );
} );

var p1 = new Promise( function(resolve,reject){
	resolve( p3 );
} );

var p2 = new Promise( function(resolve,reject){
	resolve( "A" );
} );

p2.then( function(v){
	console.log( v );
} );

p1.then( function(v){
	console.log( v );
} );

//node 和其他console.log为B A
//浏览器的console.log为A B 
//?????