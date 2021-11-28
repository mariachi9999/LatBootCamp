import { assert } from "chai";

const dir = './lib/'
const moduleSpecifier = dir + 'my-math2.mjs';

function loadModule() {
    return import(moduleSpecifier)
    .then(myMath => {
        const result = myMath.LIGHTSPEED;
        assert.equal(result, 299792458)
        return result;
    });
}

loadModule();