import { reverseString } from "./reverseString.js"

test('Reverse a string', () => {
  expect(reverseString("biglongstring")).toBe("gnirtsgnolgib");
});