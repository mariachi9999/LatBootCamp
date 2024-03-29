import { serialize, deserialize } from "../app.mjs";
import { assert } from "chai";

const myObj = {
  testNumber: 123,
  testBigInt: 987n,
  nested: {
    myProp: 5n,
    myProp2: 10,
    myArray: [5n],
    myObject: {
      test: 5n,
    },
  },
  myArray: [5, 50n],
};

const myJson = '{ "testNumber": 123, "testBigInt": "987n"}';

const myJson2 =
  '{"testNumber":123,"testBigInt":"987n","nested":{"myProp":"5n","myProp2":10,"myArray":["5n"],"myObject":{"test":"5n"}},"myArray":[5,"50n"]}';

describe("Test serialize method", function () {
  it("Tests begin to run", function () {
    assert.isString("run", "Test is not running ok!");
  });
  it("serialize a number", function () {
    let variable = { testNumber: 123 };
    let result = serialize(variable);
    assert.equal(result, JSON.stringify(variable), "must return an string");
  });
  it("serialize a bigInt", function () {
    let variable = { testBigInt: 987n };
    let result = serialize(variable);
    assert.equal(
      result,
      JSON.stringify(variable),
      "must return an bigint serialized"
    );
  });
  it("serialize an object", function () {
    let variable = {
      nested: {
        myProp: 5n,
        myProp2: 10,
        myArray: [5n],
        myObject: {
          test: 5n,
        },
      },
    };
    let result = serialize(variable);
    assert.equal(
      result,
      JSON.stringify(variable),
      "must return an object serialized"
    );
  });
  it("serialize an array", function () {
    let variable = { myArray: [5, 50n] };
    let result = serialize(variable);
    assert.equal(
      result,
      JSON.stringify(variable),
      "must return an array serialized"
    );
  });
  it("serialize a complex object", function () {
    let variable = myObj;
    let result = serialize(variable);
    assert.equal(
      result,
      JSON.stringify(variable),
      "must return an array serialized"
    );
  });
});

describe("Test deserialize method", function () {
  it("Tests begin to run", function () {
    assert.isString("run", "Test is not running ok!");
  });
  it("deserialize a number", function () {
    let variable = '{ "testNumber": 123}';
    let result = deserialize(variable);
    assert.deepEqual(
      result,
      JSON.parse(variable),
      "must return an object with a property with a number as value"
    );
  });
  it("deserialize a bigint", function () {
    let variable = '{ "testBigInt": "987n"}';
    let result = deserialize(variable);
    assert.deepEqual(
      result,
      JSON.parse(variable),
      "must return an object with a property with a number as value"
    );
  });
  it("deserialize a complex json", function () {
    let variable = myJson;
    let result = deserialize(variable);
    assert.deepEqual(
      result,
      JSON.parse(variable),
      "must return an object with a property with a number as value"
    );
  });
  it("deserialize a complex json 2", function () {
    let variable = myJson2;
    let result = deserialize(variable);
    assert.deepEqual(
      result,
      myObj,
      "must return an object with a property with a number as value"
    );
  });
});
