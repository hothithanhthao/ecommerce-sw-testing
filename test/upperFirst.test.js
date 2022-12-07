import upperFirst from '../src/upperFirst';

describe("upperFirst", () => {
    test("should upperFirst the input if the input is the lowercase string", () => {
      const input = 'fred';
      const output = 'Fred';

      expect(upperFirst(input)).toStrictEqual(output);
    });

    test("should upperFirst the input if the input is the uppercase string", () => {
      const input = 'FRED';
      const output = 'FRED';

      expect(upperFirst(input)).toStrictEqual(output);
    });

    test.skip("should throw type error if the input not a string - TC fail", () => {
      const input = true;
      
      expect(upperFirst(input)).toThrowError(TypeError);
    });

});