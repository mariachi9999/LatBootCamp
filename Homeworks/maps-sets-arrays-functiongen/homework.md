# Collections

Until ES6 (ECMAScript 2015), JavaScript objects and arrays were the most important data structures to handle collections of data.

An **object** is created with curly braces {…} and a list of properties. A property is a key-value pair where the key must be a string and the value can be of any type.

On the other hand, **arrays** are an ordered collection that can hold data of any type. In JavaScript, arrays are created with square brackets [...] and allow duplicate elements.

However, there were a few shortcomings,

<ul>
<li>Object keys can only be of type string. 
A regular JavaScript object always treats the key as a string. Even when you pass it a primitive or object, it internally converts the key into a string.</li>
<li>Objects don't maintain the order of the elements inserted into them.</li>
<li>Objects lack some useful methods, which makes them difficult to use in some situations. For example, you can't compute the size (length) of an object easily. Also, enumerating an object is not that straightforward.</li>
<li>Arrays are collections of elements that allow duplicates. Supporting arrays that only have distinct elements requires extra logic and code.</li>
</ul>

With the introduction of ES6, we got two new data structures that address the shortcomings mentioned above: **Map** and **Set**.

## Map vs. Object: When should you use them?

**Map** has characteristics of both object and array. However, Map is more like an object than array due to the nature of storing data in the key-value format.

**Use Map** when:
. Your needs are not that simple. You may want to create keys that are non-strings or Storing an object as a key.
. You need a data structure where elements can be ordered.

**Use an Object** when:
. You do not have any of the needs listed above.
. You rely on JSON.parse() as a Map cannot be parsed with it.

## Sets and Arrays in JavaScript

An array, like a Set, allows you to add and remove elements. But Set is quite different, and is not meant to replace arrays.
The major difference between an array and a Set is that arrays allow you to have duplicate elements.

**Use Set** when you need to maintain a distinct set of data to perform set operations on like union, intersection, difference, and so on.

# Arrays

An array is a collection of elements or items.
A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated.
Arrays can be a collection of elements of any type.
The position of an element in the array is known as its index. In JavaScript, the array index starts with 0, and it increases by one with each element.

The number of elements in the array determines its length.

## Basic Array operations

**How to create an array**

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// or
const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
```

**How to get elements from an array**
You need to use the square bracket syntax to access array elements.

```
const element = array[index];
//or from end to start
const element = array[array.lenght - 1 ]

```

**How to iterate array**
You can also loop through the array using **a regular for** or **forEach** loop, **or any other loop**.

```
for(let i=0; i<salad.length; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}

```

## Adding and removing elements

**How to Add Elements to an Array in JS**
The **push()** method adds an element **at the end** of the array.
The **unshift()** method. If you want to add an element **to the beginning** of the array

**How to Remove Elements from an Array in JS**
The **pop()** method, it removes an element **from the end** of the array.
Use the **shift()** method to remove an element **from the beginning** of an array.
Both returns the removed element and changes the original array.

## Other basic operations with arrays

**How to Copy and Clone an Array in JS**

OPTION 1
You can copy and clone an array to a new array using the **slice()** method.
Note that the slice() method doesn't change the original array.
Instead, it creates a new shallow copy of the original array.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad.slice();
salad === saladCopy; // returns false
```

OPTION 2
Alternatively, you can use the spread operator to create a copy of the array.

**How to Determine if a Value is an Array in JS**
Use **Array.isArray(value)** method.
The method returns true if the passed value is an array.

**Array destructuring**
With ECMAScript 6 (ES6), we have some new syntax to extract multiple properties from an array and assign them to variables in one go.
The destructuring syntax saves you from writing lots of code. This gives you a massive boost in productivity.

```
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];

//even you can assign a default value using destructuring when there is no value or undefined for the array element.

let [tomato , mushroom = '🍄'] = ['🍅'];

//you can skip an array element to map to a variable, too.
let [tomato, , carrot] = ['🍅', '🍄', '🥕'];

```

**How to Use the Spread Syntax and Rest Parameter in JavaScript**

Since ES6, we can use the ... (yes, three consecutive dots) as spread syntax and the rest parameter in array destructuring.

    For the rest parameter, the ... appears on the left side of the destructuring syntax.
    For the spread syntax, the ... appears on the right side of the destructuring syntax.

```
// Using rest parameter to map the remaining elements.
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// With the spread operator, we can create a clone/copy of an existing array.
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCloned = [...salad];

salad === saladCloned // false
```

**Useful real life cases**;

How to Swap Values with Destructuring

```
let first = '😔';
let second = '🙂';
[first, second] = [second, first];

console.log(first);  // '🙂'
console.log(second); // '😔'
```

How to Merge Arrays

```
const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];

const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
```

## Other methods

**concat()** to merge one or more arrays.

```
const merged = first.concat(second);
```

**join()** to joins all the elements of the array using a separator and returns a string. .

```
const joined = emotions.join();
```

**fill()** to fills an array with a static value..

```
const colors = ['red', 'blue', 'green'];

colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]
```

**includes(element)** to determine the presence on an element in an array .
Returns true or false.

**indexOf(element)** to to know the index position of an element in array..
Returns -1 if the element is not found.

**reverse()** reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last..

**sort()** converts the element types into strings and then sorts them.

```
const names = ['tom', 'alex', 'bob'];

names.sort(); // returns ["alex", "bob", "tom"]
```

The sort() method accepts an optional comparator function as an argument. You can write a comparator function and pass to the sort() method to override the default sorting behavior.

```
const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
console.log(numbers.sort()) // [1, 10, 100, 13, 23, 37, 5, 56, 9]
// This is because sort convert elements to string and then compares them to UTF-16 code unit values.

// Solution => Pass a comparator function
function ascendingComp(a, b){
  return (a-b);
}

numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]
```

**splice()** helps you add, update, and remove elements in an array.

```
const names = ['tom', 'alex', 'bob'];

// To delete
names.splice(1,2) // returns alex, bob.... and names now is equal to ['tom'].

// To uptate
names.splice(1,1,'nico') // returns 'alex' but now names = ['tom', 'nico', 'bob']

// To add
names.splice(1,0,'nico') // now names = ['tom', 'nico','alex', 'bob']

```

## for-of and Arrays - ES6

## Multidimensional Arrays

**Nested Array Destructuring in JS**
This means that an array can have another array as an element. Array nesting can go to any depth.

```
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
// You can access to a vegetable using:
const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot = veg[2]; // returns '🥕'
```

## .find(), .map(), .filter(), etc. .flatMap() .sort() others?

These are named Array Operators Methods.
All the array iterator methods take a function as an argument.

**filter()**
Creates a new array with all the elements that satisfies the condition mentioned in the function.

```
const femaleStudents = students.filter((element, index) => {
  return element.gender === 'F';
})

console.log(femaleStudents);
```

**map()**
Creates a new array by iterating through the elements and applying logic we provided in the function as an argument.

```
const fullNames = students.map((element, index) => {
  return {'fullName': element['f_name'] + ' ' + element['l_name']}
});

console.log(fullNames);
```

**reduce()**
Applies a reducer function on each of the array elements and returns an output value.

```
const total = students.reduce(
   (accumulator, student, currentIndex, array) => {
      accumulator = accumulator + student.paid;
      return (accumulator);
   },
0);

console.log(total); // 1000
```

In the above code,

    We initialize the accumulator with 0.
    We apply the reduce method on each of the student objects. We access the paid property and add it to the accumulator.
    Finally, we return the accumulator.

**some()**
Returns a boolean value (true/false) based on at least one element in the array passing the condition in the function.

```
let hasStudentBelow30 = students.some((element, index) => {
  return element.age < 30;
});

console.log(hasStudentBelow30); // true
```

**every()**
Returns a boolean value (true/false) based if all elements in the array pass the condition in the function.

```
const atLeastTwoCourses = students.every((elements, index) => {
  return elements.courses.length >= 2;
});

console.log(atLeastTwoCourses); // true
```

**find()**
Returns the first matched element from the array that satisfies the condition in the function.

```
const student = students.find((element, index) => {
  return element.age < 30;
});

console.log(student);
```

**flatMap()**
Maps each element in an array using a mapping function and flattens the result into a new array.
Remember that the **flat()** method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```
let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

let words = sentences.map(s => s.split(' '));
console.log(words);
Code language: JavaScript (javascript)

// Output:

[
    [ 'JavaScript', 'Array', 'flatMap()' ],
    [ ' ' ],
    [ 'is' ],
    [ ' ' ],
    [ 'Awesome' ]
]

let words = sentences.flatMap(s => s.split(' '));
console.log(words);

// Output:

[ 'JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome' ]
```

## ECMA2021 new method: at()

Help you access the elements of an array using a negative index number.

```
const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
```

# Typed Arrays

Typed Arrays are an ECMAScript 6 API for handling binary data.

JavaScript Provides 8 Typed Array types:

    Int8Array an array of 8-bit signed integers
    Int16Array an array of 16-bit signed integers
    Int32Array an array of 32-bit signed integers
    Uint8Array an array of 8-bit unsigned integers
    Uint16Array an array of 16-bit unsigned integers
    Uint32Array an array of 32-bit unsigned integers
    Float32Array an array of 32-bit floating point numbers
    Float64Array an array of 64-bit floating point numbers

All of them are ArrayBufferView instances.

A Typed Array is essentially a view into an ArrayBuffer, where every item has the same size, and type.
The main use case for Typed Arrays is to use with WebGL, Web Audio or the Canvas API. Some of the WebGL functions are expecting typed arrays, as they are much more performant than regular JavaScript arrays.

Those typed arrays are array-like, so now we can inspect the content of the buffer via the usual array access techniques, and we have access to lots of methods and properties including map(), reduce() and so on.

## Example:

Here’s an example of how to create an array of 8-bit signed integers:

```
const a = new Int8Array()

const a = new Int8Array(Buffer)

```

# Maps

Map is a collection of key-value pairs where the key can be of any type.
Map remembers the original order in which the elements were added to it, which means data can be retrieved in the same order it was inserted in.

In other words, Map has characteristics of both Object and Array:

    Like an object, it supports the key-value pair structure.
    Like an array, it remembers the insertion order.

## Maps methods

<ul>
<li>
**size** ...property to know how many elements are in a Map.
</li>
<li>
**has(key)**... Search an element with this key.
</li>
<li>
**delete(key)**... to remove an element.
</li>
<li>
**clear()** ...to remove all the elements from the Map at once.
</li>

**Methods keys, values and entries return a Map Iterator**.
We could use this to use an **for-of** or an **forEach** to iterate with it.

<li>
**keys()** ...return all keys.
</li><li>
**values()** ...return all values.
</li><li>
**entries()** ...return all key-value pairs.
</li>
</ul>

## How to iterate with a map?

You can use either the forEach or for-of loop to iterate over a Map:

```
// with forEach
ageMap.forEach((value, key) => {
   console.log(`${key} is ${value} years old!`);
});

// with for-of
for(const [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}
```

## Example:

Create a map:

```
const freeCodeCampBlog = new Map();

//or

const freeCodeCampBlog = new Map([
  ['name', 'freeCodeCamp'],
  ['type', 'blog'],
  ['writer', 'Tapas Adhikary'],
]);
```

Add values:
To add value to a Map, use the set(key, value) method.

```
// create a map
const map = new Map();

// Add values to the map
map.set('name', 'freeCodeCamp');
map.set('type', 'blog');
map.set('writer', 'Tapas Adhikary');

// Replace a previous value:
map.set('writer', 'Someone else!');

// Get a value from a Map, using the get(key) method:
map.get('name'); // returns freeCodeCamp

```

Map keys can be of any type, a primitive, or an object.
This is one of the major differences between Map and regular JavaScript objects where the key can only be a string.

```
// create a Map
const funMap = new Map();

funMap.set(360, 'My House Number'); // number as key
funMap.set(true, 'I write blogs!'); // boolean as key

let obj = {'name': 'tapas'}
funMap.set(obj, true); // object as key

//console.log(funMap)

Map(3)
{
  360 => "My House Number",
  true => "I write blogs!",
  {…} => true
}
```

How to Convert an Object into a Map in JavaScript

```
const addressMap = new Map(Object.entries(address));
```

How to Convert a Map into an Object in JavaScript

```
Object.fromEntries(map)
```

How to Convert a Map into an Array in JavaScript

```
console.log(Array.from(map));
```

# WeakMap

## What is?

La primera diferencia con Map es que **las claves WeakMap deben ser objetos, no valores primitivos**.

WeakMap no admite la iteración ni los métodos keys(), values(), entries(), así que no hay forma de obtener todas las claves o valores de él.

WeakMap tiene solo los siguientes métodos:

    weakMap.get(clave)
    weakMap.set(clave, valor)
    weakMap.delete(clave)
    weakMap.has(clave)

## Example:

```
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // funciona bien (la clave es un objeto)

// no puede usar un string como clave
weakMap.set("test", "Whoops"); // Error, porque "test" no es un objeto
```

# Set

A Set **is a collection of unique elements that can be of any type**. Set is also an ordered collection of elements, which means that elements will be retrieved in the same order that they were inserted in.

How to Create and Initialize a Set in JavaScript

```
const set = new Set();
or
const fruteSet = new Set(['🍉', '🍎', '🍈', '🍏']);
```

## Set Properties and Methods in JavaScript

**Size**
Use the size property to know the size of the Set. It returns the number of elements in it.

**Add**
Use the add(element) method to add an element to the Set.

```
saladSet.add('🍅'); // tomato
```

**has(element)**
Use the has(element) method to search if we have it in the set.

**delete(element)**
Use the delete(element) method to remove an element.

**clear()**
Use the clear() method to remove all elements from a Set.

## Iterating over Sets

Set has a method called **values()** which returns a SetIterator to get all its values.
We can use a forEach or for-of loop on this to retrieve the values.

## Example

```
// with forEach

houseNos.forEach((value) => {
   console.log(value);
});


// with for-of

for(const value of houseNos) {
   console.log(value);
 }
```

Interestingly, JavaScript tries to make Set compatible with Map.
That's why we find two of the same methods as Map, keys() and entries().

As Set doesn't have keys, the keys() method returns a SetIterator to retrieve its values.

As a Set again there are no keys, so entries() returns a SetIterator to retrieve the value-value pairs.

How to Convert a Set into an array in JavaScript

```
const arr = [...houseNos];
```

Unique values from an array using the Set in JavaScript

```
// Create a mixedFruit array with a few duplicate fruits
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];

// Pass the array to create a set of unique fruits
const mixedFruitSet = new Set(mixedFruit);
```

# WeakSets

WeakSet se comporta de manera similar:

    Es análogo a Set, pero solo podemos agregar objetos a WeakSet (no primitivos).
    Existe un objeto en el conjunto mientras es accesible desde otro lugar.
    Al igual que Set, admiteadd, has ydelete, pero no size,keys() ni iteraciones.

## Example:

```
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John nos visita
visitedSet.add(pete); // luego Pete
visitedSet.add(john); // John otra vez

// visitedSet tiene 2 usuarios ahora

// comprobar si John nos visitó?
alert(visitedSet.has(john)); // true

// comprobar si Mary nos visitó?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet se limpiará automáticamente
```

# Synchronous generators

## What are synchronous generators?

Functions that can return multiple values at different time interval, as per the user demands and can manage its internal state are generator functions. A function becomes a GeneratorFunction if it uses the **function\* syntax**.

They are different from normal functions in the sense that **normal function run to completion in a single execution** whereas **generator function can be paused and resumed, so they do run to completion but the trigger remains in the developer’s hand**. They allow better execution control for asynchronous functionality but that does not mean they cannot be used as synchronous functionality.

**The pause and resume are done using yield & next**.

## yield?

The yield keyword is used to pause and resume a generator function (function\* or legacy generator function).

Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:

    A yield, which causes the generator to once again pause and return the generator's new value. The next time next() is called, execution resumes with the statement immediately after the yield.
    throw is used to throw an exception from the generator. This halts execution of the generator entirely, and execution resumes in the caller (as is normally the case when an exception is thrown).
    The end of the generator function is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is undefined and done is true.
    A return statement is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is the value specified by the return statement and done is true.

## Examples:

```
//The following code is the declaration of an example generator function.

function* countAppleSales () {
  let saleList = [3, 7, 5]
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i]
  }
}

// Once a generator function is defined, it can be used by constructing an iterator as shown.

let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }

```

# Working with unit test

UNIT TESTING is a type of software testing where **individual units or components of a software are tested**.
The purpose is to validate that each unit of the software code performs as expected. Unit Testing **is done during the development (coding phase) of an application by the developers**. Unit Tests isolate a section of code and verify its correctness. **A unit may be an individual function, method, procedure, module, or object**.

# Bibliography

[About Map and Set](https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/)

[About Array](https://www.freecodecamp.org/news/the-javascript-array-handbook/)

[About flatMap](https://www.javascripttutorial.net/es-next/javascript-array-flatmap/)

# Resource to practice array iterathor methods.

let students = [
{
'id': 001,
'f_name': 'Alex',
'l_name': 'B',
'gender': 'M',
'married': false,
'age': 22,
'paid': 250,  
 'courses': ['JavaScript', 'React']
},
{
'id': 002,
'f_name': 'Ibrahim',
'l_name': 'M',
'gender': 'M',
'married': true,
'age': 32,
'paid': 150,  
 'courses': ['JavaScript', 'PWA']
},
{
'id': 003,
'f_name': 'Rubi',
'l_name': 'S',
'gender': 'F',
'married': false,
'age': 27,
'paid': 350,  
 'courses': ['Blogging', 'React', 'UX']
},
{
'id': 004,
'f_name': 'Zack',
'l_name': 'F',
'gender': 'M',
'married': true,
'age': 36,
'paid': 250,  
 'courses': ['Git', 'React', 'Branding']
}
];
