import { assert } from "chai";

assert.equal(0b11, 3);
assert.equal(0o10, 8);
assert.equal(3, 3);
assert.equal(0xE7, 231);

assert.equal(3e2, 300);


const london = 1_335_000;
const binary = 0b1111_11111111_1000000;
const hexa = 0x1_335_000;

0.30001

// decimal 0.1 => 1(/10)

//assert.equal(0.1 + 0.2, 0.3);

//4
let x = 0;
const result = [x++, x];
assert.equal(result, [1 , 0]);

//Bigint
const mass = 6_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000n;
