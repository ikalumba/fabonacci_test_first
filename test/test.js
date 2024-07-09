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
    it('Should return correct sequence for n = 10', function() {
        assert.deepEqual(fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
      });
    it('Should return correct sequence for n = 15', function() {
        assert.deepEqual(fibonacci(15), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
      });    

});
