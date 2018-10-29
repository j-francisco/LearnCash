import { calculateRequiredUnits } from './calculations';

const initialUnits = {
  pennies: 0,
  nickels: 0,
  dimes: 0,
  quarters: 0,
  halves: 0,
  ones: 0,
  fives: 0,
  tens: 0,
  twenties: 0,
  fifties: 0,
  hundreds: 0,
};

describe('calculateRequiredUnits returns', () => {
  const runTest = (input, expectedOutput, enableHalfDollars = false) => {
    expect(calculateRequiredUnits(input, enableHalfDollars)).toEqual(expectedOutput);
  };

  test('all zeroes when value is ""', () => {
    runTest('', initialUnits);
  });

  test('all zeroes when value is "$"', () => {
    runTest('$', initialUnits);
  });

  test('all zeroes when value is "$0"', () => {
    runTest('$0', initialUnits);
  });

  test('all zeroes when value is "$0.0"', () => {
    runTest('$0.0', initialUnits);
  });

  test('all zeroes when value is "$0.00"', () => {
    runTest('$0.00', initialUnits);
  });

  test('1 penny when value is "$0.01"', () => {
    const result = { ...initialUnits, pennies: 1 };
    runTest('$0.01', result);
  });

  test('2 pennies when value is "$0.02"', () => {
    const result = { ...initialUnits, pennies: 2 };
    runTest('$0.02', result);
  });

  test('1 nickel when value is "$0.05"', () => {
    const result = { ...initialUnits, nickels: 1 };
    runTest('$0.05', result);
  });

  test('1 nickel, 1 penny when value is "$0.06"', () => {
    const result = { ...initialUnits, nickels: 1, pennies: 1 };
    runTest('$0.06', result);
  });

  test('1 nickel, 4 pennies when value is "$0.09"', () => {
    const result = { ...initialUnits, nickels: 1, pennies: 4 };
    runTest('$0.09', result);
  });

  test('1 dime when value is "$0.10"', () => {
    const result = { ...initialUnits, dimes: 1 };
    runTest('$0.10', result);
  });

  test('1 dime, 1 penny when value is "$0.11"', () => {
    const result = { ...initialUnits, dimes: 1, pennies: 1 };
    runTest('$0.11', result);
  });

  test('1 dime, 4 pennies when value is "$0.14"', () => {
    const result = { ...initialUnits, dimes: 1, pennies: 4 };
    runTest('$0.14', result);
  });

  test('1 dime, 1 nickel when value is "$0.15"', () => {
    const result = { ...initialUnits, dimes: 1, nickels: 1 };
    runTest('$0.15', result);
  });

  test('1 dime, 1 nickel, 1 penny when value is "$0.16"', () => {
    const result = { ...initialUnits, dimes: 1, nickels: 1, pennies: 1 };
    runTest('$0.16', result);
  });

  test('1 dime, 1 nickel, 4 pennies when value is "$0.19"', () => {
    const result = { ...initialUnits, dimes: 1, nickels: 1, pennies: 4 };
    runTest('$0.19', result);
  });

  test('2 dimes when value is "$0.20"', () => {
    const result = { ...initialUnits, dimes: 2 };
    runTest('$0.20', result);
  });

  test('2 dimes, 1 penny when value is "$0.21"', () => {
    const result = { ...initialUnits, dimes: 2, pennies: 1 };
    runTest('$0.21', result);
  });

  test('2 dimes, 4 pennies when value is "$0.24"', () => {
    const result = { ...initialUnits, dimes: 2, pennies: 4 };
    runTest('$0.24', result);
  });

  test('1 quarter when value is "$0.25"', () => {
    const result = { ...initialUnits, quarters: 1 };
    runTest('$0.25', result);
  });

  test('1 quarter, 1 penny when value is "$0.26"', () => {
    const result = { ...initialUnits, quarters: 1, pennies: 1 };
    runTest('$0.26', result);
  });

  test('1 quarter, 1 nickel when value is "$0.30"', () => {
    const result = { ...initialUnits, quarters: 1, nickels: 1 };
    runTest('$0.30', result);
  });

  test('1 quarter, 1 nickel, 1 penny when value is "$0.31"', () => {
    const result = { ...initialUnits, quarters: 1, nickels: 1, pennies: 1 };
    runTest('$0.31', result);
  });

  test('1 quarter, 1 dime when value is "$0.35"', () => {
    const result = { ...initialUnits, quarters: 1, dimes: 1 };
    runTest('$0.35', result);
  });

  test('1 quarter, 1 dime, 1 penny when value is "$0.36"', () => {
    const result = { ...initialUnits, quarters: 1, dimes: 1, pennies: 1 };
    runTest('$0.36', result);
  });

  test('1 quarter, 1 dime, 1 nickel when value is "$0.40"', () => {
    const result = { ...initialUnits, quarters: 1, dimes: 1, nickels: 1 };
    runTest('$0.40', result);
  });

  test('1 quarter, 1 dime, 1 nickel, 1 penny when value is "$0.41"', () => {
    const result = { ...initialUnits, quarters: 1, dimes: 1, nickels: 1, pennies: 1 };
    runTest('$0.41', result);
  });

  test('1 quarter, 2 dimes when value is "$0.45"', () => {
    const result = { ...initialUnits, quarters: 1, dimes: 2 };
    runTest('$0.45', result);
  });

  test('2 quarters when value is "$0.50"', () => {
    const result = { ...initialUnits, quarters: 2 };
    runTest('$0.50', result);
  });

  test('1 half dollar when value is "$0.50" and half dollars enabled', () => {
    const result = { ...initialUnits, halves: 1 };
    runTest('$0.50', result, true);
  });

  test('3 quarters, 2 dimes, 4 pennies when value is "$0.99"', () => {
    const result = { ...initialUnits, quarters: 3, dimes: 2, pennies: 4 };
    runTest('$0.99', result);
  });

  test('1 dollar when value is "$1"', () => {
    const result = { ...initialUnits, ones: 1 };
    runTest('$1', result);
  });

  test('1 dollar when value is "$1."', () => {
    const result = { ...initialUnits, ones: 1 };
    runTest('$1.', result);
  });

  test('1 dollar when value is "$1.0"', () => {
    const result = { ...initialUnits, ones: 1 };
    runTest('$1.0', result);
  });

  test('1 one when value is "$1.00"', () => {
    const result = { ...initialUnits, ones: 1 };
    runTest('$1.00', result);
  });

  test('1 five and 1 one when value is "$6.00"', () => {
    const result = { ...initialUnits, fives: 1, ones: 1 };
    runTest('$6.00', result);
  });

  test('1 ten, 1 five, 4 ones when value is "$19.00"', () => {
    const result = { ...initialUnits, tens: 1, fives: 1, ones: 4 };
    runTest('$19.00', result);
  });

  test('1 twenty when value is "$20"', () => {
    const result = { ...initialUnits, twenties: 1 };
    runTest('$20', result);
  });

  test('2 twenties when value is "$40"', () => {
    const result = { ...initialUnits, twenties: 2 };
    runTest('$40', result);
  });

  test('1 fifty when value is $"50"', () => {
    const result = { ...initialUnits, fifties: 1 };
    runTest('$50', result);
  });

  test('1 hundred when value is $"100"', () => {
    const result = { ...initialUnits, hundreds: 1 };
    runTest('$100', result);
  });

  test('2 hundreds when value is $"200"', () => {
    const result = { ...initialUnits, hundreds: 2 };
    runTest('$200', result);
  });

  test('when value is $"189.44"', () => {
    const result = {
      hundreds: 1,
      fifties: 1,
      twenties: 1,
      tens: 1,
      fives: 1,
      halves: 0,
      ones: 4,
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 4,
    };
    runTest('$189.44', result);
  });
});
