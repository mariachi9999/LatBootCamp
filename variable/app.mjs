import { assert } from "chai";

// const x = 3;
// assert.equal(x, 3);
// {
//     const x = 12;
//     assert.equal(x, 12);
// }
// assert.equal(x, 3);


// //for
// const arr = ['hello', 'world'];
// for (const elem of arr) {
//     console.log(elem);
// }


// const arr2 = ['hello', 'world'];
// for (let i = 0; i < arr2.length; i++) {
//     const elem = arr2[i];
//     console.log(elem);
// }

// {
//     console.log(x);
//     const x = 3;
// }

//temp zone
if (true) {
    assert.throws(() => (tmp = 'abc'), ReferenceError);
    assert.throws(() => (console.log(tmp)), ReferenceError);

    let tmp;
    assert.equal(tmp, undefined);
    console.log(tmp);

}

//early activation
assert.equal(foo(), 1)
function foo() { return 1; }

function foo2() { return 1; }
assert.equal(foo2(), 1)

//class

assert.throws(() => new MyClass(), ReferenceError);

class MyClass { }

assert.equal(new MyClass() instanceof MyClass, true);

// partial early activation
f();

function f() {
    assert.equal(x, undefined);

    if (true) {
        var x = 123;
    }

    assert.equal(x, 123)

}


//closure
function funfactory(value) {
    return () => {
        return value;
    }
}

const myFun = funfactory('abc');

console.log(myFun());

let myVar = 'a';
{
    console.log(myVar);
    let myVar;
    myVar = 'b';
}