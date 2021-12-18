import { assert, expect } from "chai";
import { orderWeight, sumOfDigits } from "../src/orderWeight";

describe("Fixed Tests", function() {
  it("orderWeight", function() {
    assert.strictEqual(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
    assert.strictEqual(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
  });
  
  it("sumOfDigits", function() {
    expect(sumOfDigits("100")).to.equal(1);
    expect(sumOfDigits("99")).to.equal(18);
    
  });
});
