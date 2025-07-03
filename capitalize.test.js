import { capitalize } from "./capitalize.js"

test('Capitalize a word', () => {
  expect(capitalize("word")).toBe("Word");
});