let assert = require('assert')

const x = 8;
//x = 10;

let y;

y = 3 * 5;

//numbers

let myNumber = 50;
myNumber = 1.141;
myNumber = -55;

//strings

let myString = 'abc'
myString = "abc"
myString = `String interpolation: ${256} ${myString}`


console.log('Hello');
console.warn('Hello');
console.error('Something went wrong!');

//Object

const myObject = {
    first: 'jane',
    last: 'Doe',
    getFullName() {
        return this.first + ' ' + this.last
    }
};

myObject.last = 'Modified Last Name';

console.log(myObject.getFullName());


//Array
const myArray = ['a', 'b', 'c', 'd'];
assert.equal(myArray.length, 4);