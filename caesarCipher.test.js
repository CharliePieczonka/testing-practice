import { caesarCipher } from "./caesarCipher.js"

test('Caesar cipher shift abc to ghi', () => {
  expect(caesarCipher("abc", 6)).toBe("ghi");
});

test('Caesar cipher test caps', () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('Caesar cipher test wrapping', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('Caesar cipher test punctuation', () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});