import { assert } from "chai";
import { University } from "../src/University.mjs";
import { doctors as doctors_los_olivos } from "../src/los_olivos.mjs";
import { doctors as doctors_san_pedro } from "../src/san_pedro.mjs";

describe("University Test", function () {
  const test_university = new University(
    "balcarce 930",
    2236691122,
    "university@com"
  );

  it("check address", function () {
    assert.isString(test_university.address, "address must be a string");
  });

  it("check phone", function () {
    assert.isNumber(test_university.phone, "phone must be a number");
  });

  it("check email", function () {
    assert.include(
      test_university.email,
      "@com",
      "email must contain an arroba"
    );
  });

  it("check getAvailableDoctors", function () {
    assert.isFunction(
      test_university.getAvailableDoctors,
      "getAvailableDoctors must be a method"
    );
  });

  it("check getAvailableDoctors returns doctors according time", async function () {
    let date = new Date().getHours();
    let available = await test_university.getAvailableDoctors();
    console.log("san pedro", doctors_san_pedro.available);
    console.log("los olivos", doctors_los_olivos.available);

    if (date > 19 && date < 8) {
      assert.equal(
        available,
        doctors_san_pedro.available,
        "Is data is between 7pm and 8am, must return san pedros available doctors"
      );
    } else {
      assert.equal(
        available,
        doctors_los_olivos.available,
        "Is data is between 8pm and 7pm, must return los olivos available doctors"
      );
    }
  });
});
