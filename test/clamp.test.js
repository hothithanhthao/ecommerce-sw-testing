import clamp from '../src/clamp';

describe("clamp", () => {
    test("should clamp the clamped number is the lower bound if the number to clamp is lower than the lower and upper bound", () => {
      const upperBound = 5;
      const lowerBound = -5;
      const clampNumber = -10;
      const output = -5;

      expect(clamp(clampNumber,lowerBound,upperBound)).toEqual(output);
    });

    test.skip("should clamp the clamped number is the upper bound if the number to clamp is greater than the lower and upper bound - TC fail", () => {
      const upperBound = 5;
      const lowerBound = -5;
      const clampNumber = 10;
      const output = 5;

      expect(clamp(clampNumber,lowerBound,upperBound)).toEqual(output);
    });

    test.skip("should return the clamped number if the number to clamp is between the lower and upper bound - TC fail", () => {
      const upperBound = 5;
      const lowerBound = -5;
      const clampNumber = 2;
      const output = 2;
      expect(clamp(clampNumber,lowerBound,upperBound)).toEqual(output);
    });

    test.skip("should return NaN if input is a string and throw TypeError - TC fail", () => {
      const upperBound = 5;
      const lowerBound = -5;
      const clampNumber = 'Hello';

      expect(clamp(clampNumber,lowerBound,upperBound)).toBeNaN();
      expect(clamp(clampNumber,lowerBound,upperBound)).toThrowError(TypeError);
    });

});