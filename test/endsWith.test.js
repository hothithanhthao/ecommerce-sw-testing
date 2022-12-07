import endsWith from "../src/endsWith";

describe("endsWith", () => {
  test("should return `true` if `string` ends with `target`", () => {
    const string_to_inspect = "abc";
    const target = "c";
    const output = true;
    //endsWith('abc', 'c')
    // => true
    expect(endsWith(string_to_inspect, target)).toEqual(output);
  });

  test("should return `false` if `string` does not ends with `target`", () => {
    const string_to_inspect = "abc";
    const target = "b";
    const output = false;
    //endsWith('abc', 'b')
    // => false
    expect(endsWith(string_to_inspect, target)).toEqual(output);
  });

  test("should return `true` if target is at provided position", () => {
    const string_to_inspect = "abc";
    const target = "b";
    const position = 2
    const output = true;
    //endsWith('abc', 'b', 2)
    // => true
    expect(endsWith(string_to_inspect, target, position)).toEqual(output);
  });

  test("should return `false` if target is not at provided position", () => {
    const string_to_inspect = "abc";
    const target = "b";
    const position = 10
    const output = false;
    //endsWith('abc', 'b', 10)
    // => false
    expect(endsWith(string_to_inspect, target, position)).toEqual(output);
  });

  test("should return `false` if position is the negative value", () => {
    const string_to_inspect = "abc";
    const target = "c";
    const position = -1
    const output = false;
    //endsWith('abc', 'c', -1)
    // => false
    expect(endsWith(string_to_inspect, target, position)).toEqual(output);
  });
});
