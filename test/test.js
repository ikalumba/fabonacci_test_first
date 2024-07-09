import { assert } from "chai";
import { fibonacci } from "../fibonacci.js";
import { describe, it } from "mocha";

describe('Fibonacci Sequence', function() {
    it('Should return empty array for n = 0', function() {
      assert.deepEqual(fibonacci(0), []);
    });
    it('Should return [0] for n = 1', function() {
        assert.deepEqual(fibonacci(1), [0]);
      });
    it('Should return correct sequence for n = 5', function() {
        assert.deepEqual(fibonacci(5), [0, 1, 1, 2, 3]);
    });  

});
