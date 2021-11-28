import { assert } from "chai";

const obj = {};
obj['true'] = 132;

assert.equal(obj[true], 132);

const myString = 'There are ' + 3 + ' items'

const sum = 4 + true;

let a = 15;

a %= 5;
a = 3;

console.log(a **= 0);

//bitwise and assignmet

let b = 10;
b &= 3;

//0101
//0011
//0001


console.log(b);

console.log(5 & 3);

//bitwise OR assignmet

let c = 5;
c |= 3;

//0101
//0011
//0111

console.log(c);

console.log(11 & 7);


//Logical OR assignment ||=

const myObj = {
    duration: 0,
    title: ''
};

myObj.duration ||= 10;

console.log(myObj.duration);

myObj.title ||= 'title is empty';
console.log(myObj.title);


//Logical AND assignment &&=

let x = 1;
let y = 0;

x &&= 2;
console.log(x);

y &&= 2;
console.log(y);


//Logical nullish assignment

myObj.duration ??= 100;
console.log(myObj.duration);

myObj.speed ??= 200;
console.log(myObj.speed);

//Nullish coalescencia
const foo = null ?? 'default string';
console.log(foo);

const baz = 0 ?? 50;
console.log(baz);


//Optional chaining
const adventure = {
    name: 'Alice',
    cat: {
        name: 'dina'
    }
};

console.log(adventure.name.dog?.name.test);
console.log(adventure.name.someNonExistingFunction?.());



assert.equal(122 + true, 123);
//assert.equal('122' + true, 123);
assert.equal('123' * 1, 123);
assert.equal(Number(123), 123);
assert.equal(Number('123'), 123);

// PRIMITIVE VALUES
const result = true.test;
//const result2 = null.test;


let foo2;
function bar2() { console.log('test') }
const baz2 = (x) => x;

let returnUndefined = 5;
returnUndefined = baz2();

assert.equal(foo2, undefined);
assert.equal(bar2(), undefined);
assert.equal(baz2(), undefined);
assert.equal(/^#/.exec('Z'), undefined);


function func(arg) {
    if (!arg) {
        throw new Error('Missing argument');
    }
    return 'ok';
}


//func()
//func(undefined)
//func(null)
func({})
//func(0)


//2 3 4

