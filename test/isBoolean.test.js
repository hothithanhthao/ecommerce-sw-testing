import isBoolean from '../src/isBoolean';

describe("isBoolean", () => {
    test("should return true if a value is a boolean primitive", () => {
      const input = true;
      const output = true;

      expect(isBoolean(input)).toEqual(output);
    });

    test("should return true if a value is a boolean object", () => {
        const input = Boolean(false);
        const output = true;
        
        expect(isBoolean(input)).toEqual(output);
    });

    test("should return false if a value is null", () => {
        const input = null;
        const output = false;
        
        expect(isBoolean(input)).toEqual(output);
    });

    test("should return false if a value is string", () => {
        const input = 'true';
        const output = false;
        
        expect(isBoolean(input)).toEqual(output);
    });

    test("should return false if a value is array", () => {
        const input = [true];
        const output = false;
        
        expect(isBoolean(input)).toEqual(output);
    });
});