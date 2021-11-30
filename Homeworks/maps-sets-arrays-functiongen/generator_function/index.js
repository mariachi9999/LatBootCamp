//The following code is the declaration of an example generator function.

function* countAppleSales() {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}

// Once a generator function is defined, it can be used by constructing an iterator as shown.

let appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
