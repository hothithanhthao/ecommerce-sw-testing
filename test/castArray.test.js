import castArray from "../src/castArray";

describe("castArray", () => {
    test("should cast castArray if the input is boolean", () => {
      const input = true;
      const output = [true];

      expect(castArray(input)).toEqual(output);
    });

    test("should cast castArray if the input is number", () => {
      const input = 8;
      const output = [8];

      expect(castArray(input)).toEqual(output);
    });

    test("should cast castArray if the input is object", () => {
      const input = { 'a': 1 };
      const output = [{ 'a': 1 }];

      expect(castArray(input)).toEqual(output);
    });

    test("should cast castArray if the input is null", () => {
      const input = null;
      const output = [null];

      expect(castArray(input)).toEqual(output);
    });

    test("should cast castArray if the input is string", () => {
      const input = "Hello Word";
      const output = ["Hello Word"];

      expect(castArray(input)).toEqual(output);
    });

    test("should cast castArray if the input is empty - TC failed", () => {
      const output = [];

      expect(castArray()).toEqual(output);
    });

    test("should not cast castArray if the input is array", () => {
      const input = [ 8, 9, true ];
      const output = [ 8, 9, true ];
      
      expect(castArray(input)).toEqual(output);
    });
});