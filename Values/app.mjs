import {assert} from 'chai';

let str = 'abc';
assert.equal(str.length, 3);
//str.length = 1;

//passed by value
let x = 123;
let y = x;

x = 5;

assert.equal(y, 123);

assert.equal(123 === 123, true);
//0x01  0x02
assert.equal('abc' === 'abc', true);


//objects

const obj = {};
obj.count = 2;

assert.equal(obj.count, 2);

obj.count = 3;

assert.equal(obj.count, 3);

//passed by identity

const a = {};
const b = a;

assert.equal(a === b, true);

a.name = 'teresa';

assert.equal(b.name, 'teresa');


//Compared by identity

const obj2 = {};

assert(obj2 === obj2, true);

//0x01  0x02
assert.equal({} === {}, false);

//Compare
typeof undefined


