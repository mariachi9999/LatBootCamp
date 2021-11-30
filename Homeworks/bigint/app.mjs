export const serialize = (myObj) => {
  for (const property in myObj) {
    if (typeof myObj[property] === "bigint") {
      myObj[property] = myObj[property].toString() + "n";
    }
  }
  return JSON.stringify(myObj);
};

export const deserialize = (myJson) => {
  const myBigInt = JSON.parse(myJson, (key, value) => {
    if (typeof value === "string" && /^\d+n$/.test(value)) {
      return BigInt(value.substr(0, value.length - 1));
    }
    return value;
  });

  return myBigInt;
};

// HOMEWORK
// Complex objects
// Unit test
// modules mjs
// martes
