import { assert } from "chai";


const dir = './lib/'
const moduleSpecifier = dir + 'my-math2.mjs';

async function loadModule(){
    const myMathModule = await import(moduleSpecifier);
    assert.equal(myMathModule.LIGHTSPEED, 299792458);
    return myMathModule;
}

loadModule();