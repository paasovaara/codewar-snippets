import { assert, expect } from "chai";
import { rowSumOddNumbers, calcLastIndexOfRow, generateArray } from "../src/sumOfOddNumbers";

describe("last index test", function() {
  it("testing for 0", () => assert.strictEqual(calcLastIndexOfRow(0), 0));
  it("testing for 1", () => assert.strictEqual(calcLastIndexOfRow(1), 1));
  it("testing for 2", () => assert.strictEqual(calcLastIndexOfRow(2), 3));
  it("testing for 3", () => assert.strictEqual(calcLastIndexOfRow(3), 6));
  it("testing for 4", () => assert.strictEqual(calcLastIndexOfRow(4), 10));
  
});

describe("generateArray", function() {
  it("testing for 0", () => expect(generateArray(0)).to.eql([]));
  it("testing for 1", () => expect(generateArray(1)).to.eql([1]));
  it("testing for 2", () => expect(generateArray(2)).to.eql([1, 3]));
  it("testing for 3", () => expect(generateArray(3)).to.eql([1, 3, 5]));
  it("testing for 6", () => expect(generateArray(6)).to.eql([1, 3, 5, 7, 9, 11]));
});

describe("basic tests", function() {
  it("Testing for 1", () => assert.strictEqual(rowSumOddNumbers(1), 1));
  it("Testing for 2", () => assert.strictEqual(rowSumOddNumbers(2), 8));
  it("Testing for 13", () => assert.strictEqual(rowSumOddNumbers(13), 2197));
  it("Testing for 19", () => assert.strictEqual(rowSumOddNumbers(19), 6859));
  it("Testing for 41", () => assert.strictEqual(rowSumOddNumbers(41), 68921));
  it("Testing for 42", () => assert.strictEqual(rowSumOddNumbers(42), 74088));
  it("Testing for 74", () => assert.strictEqual(rowSumOddNumbers(74), 405224));
  it("Testing for 86", () => assert.strictEqual(rowSumOddNumbers(86), 636056));
  it("Testing for 93", () => assert.strictEqual(rowSumOddNumbers(93), 804357));
  it("Testing for 101", () => assert.strictEqual(rowSumOddNumbers(101), 1030301));
});