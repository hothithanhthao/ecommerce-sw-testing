import add from "../src/add";

describe("add", () => {
    test("should add if the inputs are numbers", () => {
      const input1 = 2;
      const input2 = 3;
      const output = 5;
      expect(add(input1, input2)).toEqual(output);
    });

    test.skip("should throw errors if the one of inputs is not number", () => {
        const input1 = "some strings";
        const input2 = 3;
        expect(add(input1, input2)).toThrowError(TypeError);
      });

});