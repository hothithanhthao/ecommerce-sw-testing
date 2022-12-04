import isDate from "../src/isDate";

describe("isDate", () => {
  test("should return `true` if input is classified as a `Date` object", () => {
    const input = new Date;
    const output = true;
    expect(isDate(input)).toEqual(output);
  });

  test("should return `false` if input is not classified as a `Date` object", () => {
    const input = 'Mon April 23 2012';
    const output = false;
    expect(isDate(input)).toEqual(output);
  });

});
