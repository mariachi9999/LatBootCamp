const serialize = (myObj) => {
  //123n
  /* let bigIntString = bigint.toString()
  let json={"bigint": bigIntString} */

  // Object.keys()

  //myObj.testBigInt=myObj.testBigInt.toString();
  // const props = Object.keys(myObj);
  // for(let index = 0; index < props.length; index++) {
  //   console.log(myObj.props)
  //   if(typeof myObj.props[index] === 'bigint') {
  //     myObj.props[index]=myObj.props[index].toString();
  //   }
  // }

  for (const property in myObj) {
    if (typeof myObj[property] === 'bigint') {
      myObj[property] = myObj[property].toString() + 'n';
    }
  }
  return JSON.stringify(myObj)
}

const deserialize = (myJson) => {
  /*for (const property in myJson){
    console.log(property);
  }*/

  const myBigInt = JSON.parse(myJson, (key, value) => {
    // if(typeof value === "string" && value.slice(-1)==="n"){
    if (typeof value === "string" && /^\d+n$/.test(value)) {
      // let stringBigInt= value.substr(0, value.length-1);
      // let bigInt= BigInt(stringBigInt);
      // return bigInt;

      return BigInt(value.substr(0, value.length - 1))
    }
    return value;
  })

  console.log(myBigInt)
  return myBigInt

}

//deserialize(serialize(myObj));
// BigInt(stringBigInt)
const myObj = {
  testNumber: 123,
  testBigInt: 987n,
  nested: {
    myProp: 5n,
    myProp2: 10,
    myArray: [5n],
    myObject: {
      test: 5n
    }
  },
  myArray: [5, 50n]
}

const myJson = '{ "testNumber": 123, "testBigInt": "987n"}';

console.log(serialize(myObj))
console.log(deserialize(myJson))

// Complex objects
// Unit test
// modules mjs
// martes
