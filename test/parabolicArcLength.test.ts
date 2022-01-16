
import solution = require('../src/parabolicArcLength');
import {assert} from "chai";

function testing(actual, expected){
    var inrange = Math.abs((actual - expected) / expected) <= 1e-6;
    assert.equal(inrange, true, "At (relative) 1e-06: Expected value must be near " + expected.toExponential(6) +", but got " + actual.toExponential(6));
}

describe("Fixed Tests", function() {
    it("Basic tests lenCurve", function() {
        testing(solution.G964.lenCurve(1), 1.414213562);
        testing(solution.G964.lenCurve(10), 1.478197397);
        });
});
