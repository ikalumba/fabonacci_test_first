import { assert } from "chai";
import { fibonacci } from "../fibonacci.js";
import { describe, it } from "mocha";

describe('Fibonacci Sequence', function() {
    it('Should return empty array for n = 0', function() {
      assert.deepEqual(fibonacci(0), []);
    });
});
