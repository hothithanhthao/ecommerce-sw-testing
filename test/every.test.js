import every from "../src/every";

describe("every", () => {
  test("should return false when not all elements are Boolean", () => {
    const array_to_inspect = [true, 1, null, 'yes'];
    const predicate = Boolean;
    const output = false;
    expect(every(array_to_inspect, predicate)).toEqual(output);
  });
  test("should return true when all elements are Number", () => {
    const array_to_inspect = [122, 1, 3, 0.98];
    const predicate = Number;
    const output = true;
    expect(every(array_to_inspect, predicate)).toEqual(output);
  });
  test.skip("should return true when not all elements are String", () => {
    const array_to_inspect = [122, "yes", "string"];
    const predicate = String;
    const output = false;
    expect(every(array_to_inspect, predicate)).toEqual(output);
  });
});
