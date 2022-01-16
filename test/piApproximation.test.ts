
import solution = require('../src/piApproximation');
import {assert} from "chai";

function testIt(eps, expected) {
  assert.deepEqual(solution.G964.iterPi(eps), expected)
}

describe("Test factorial generation", function() {
  it("Basic tests", function() {
    assert.deepEqual(solution.factorialForIteration(0), 1);
    assert.deepEqual(solution.factorialForIteration(1), -1/3);
    assert.deepEqual(solution.factorialForIteration(2), 1/5);
    assert.deepEqual(solution.factorialForIteration(3), -1/7);
  });
});

describe("Fixed Tests iterPi", function() {
  it("Basic tests", function() {
    testIt(0.1, [10, 3.0418396189]);
    testIt(0.01,  [100, 3.1315929036]);
    testIt(0.001,  [1000, 3.1405926538]);
  });
});



