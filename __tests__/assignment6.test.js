//Import function from assignment.js
const { convertToUpperCase } = require("../assignment");
//Our test case about "converToUpperCase"-function.
describe("convertToUpperCase function", () => {
  //test defines our testcase.
  test("converts text to uppercase", () => {
    //The input text to be converted to uppercase
    const input = "Hello, this text should be in uppercase!";
    //The expected output from our text-input.
    const expectedOutput = "HELLO, THIS TEXT SHOULD BE IN UPPERCASE!";
    //Stores our testresult
    const result = convertToUpperCase(input);

    //Using jest expect function to compare our result with our expected result.
    expect(result).toBe(expectedOutput);
  });
});
