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

describe("Test serialize method", function () {
  it("Tests begin to run", function () {
    assert.isString("run", "Test is not running ok!");
  });
});
