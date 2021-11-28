import { assert } from "chai";

// import {square as sq} from './lib/my-math.mjs';

// assert.equal(sq(9), 3);

// import * as myMath from './lib/my-math.mjs';
// assert.equal(myMath.square(9), 3);


//export style
// import {square, LIGHTSPEED} from './lib/my-math2.mjs';

// assert.equal(square(3), 9);
// assert.equal(LIGHTSPEED, 299792458);

//default export
import myFunction from './default-export.mjs';
myFunction();

//RE export
import * as reExported from "./re-exporting.mjs"
reExported.foo();
reExported.b();

import {newName} from "./re-exporting.mjs"
newName.b();

//COUNTER
import { counter, incCounter } from './counter.mjs';

assert.equal(counter, 3);
incCounter();
assert.equal(counter, 4);

counter++;



