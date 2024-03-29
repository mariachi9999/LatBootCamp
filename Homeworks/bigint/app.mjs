export const serialize = (myObj) => {
  function analyze(myObj) {
    for (const property in myObj) {
      if (typeof myObj[property] === "bigint") {
        myObj[property] = myObj[property].toString() + "n";
      }
      if (typeof myObj[property] === "object") {
        analyze(myObj[property]);
      }
    }
  }

  analyze(myObj);
  return JSON.stringify(myObj);
};

export const deserialize = (myJson) => {
  const myObj = JSON.parse(myJson);
  for (const property in myObj) {
    if (typeof value === "string" && /^\d+n$/.test(value)) {
      return BigInt(value.substr(0, value.length - 1));
    }
  }
  return myObj;
};

// HOMEWORK
// Complex objects
// Unit test
// modules mjs
// martes
