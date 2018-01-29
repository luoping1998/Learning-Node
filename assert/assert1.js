//assert(value, message);
//

var assert = require('assert');

function add (a, b) {
	return a+b;
} 

var result = add(1,2);
assert(result === 3,'1+2=3');
assert(result === 4,'1+2=4');