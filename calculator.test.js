import { Calculator } from "./calculator.js"

let calc = new Calculator()
test('adds 1 to 2 to equal 3', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('subtracts 3 from 5 to equal 2', () => {
  expect(calc.subtract(5, 3)).toBe(2);
});

test('divides 10 by 2 to equal 5', () => {
  expect(calc.divide(10, 2)).toBe(5);
});

test('multiplies 3 by 5 to equal 15', () => {
  expect(calc.multiply(5, 3)).toBe(15);
});