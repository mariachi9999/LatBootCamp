import { assert } from "chai";
import { isTextFile } from "./file-tools.mjs"

console.log(isTextFile('app.txt'));

const ε = 0.001;
const строка = '';
const _temp = 0;
const $foo = true;

//test mocha
const myArray = ['a', 'b', 'c', 'd'];
assert.equal(myArray.length, 4);