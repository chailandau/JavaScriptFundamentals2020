/**
 * Create a function named called "printGreeting".
 * It should accept a name and return "Hello ______!"
 * @example printGreeting("Tim"); // Hello Tim!
 */

let printGreeting = (name) => {
  let greeting = `Hello ${name}!`;
  return greeting;
};

console.log(printGreeting("Tim"));

/**
 * Create a function named "timesFive". It should multiply a number by 5.
 * @example timesFive(5); // 25
 * @example timesFive(2); // 10
 * @example timesFive(0); // 0
 */

let timesFive = (num) => {
  let numTimesFive = num * 5;
  return numTimesFive;
};

console.log(timesFive(10));

/**
 * Create a function called "lowerCaseName".
 * If given a string, it should return the string lower cased.
 * @example lowerCaseName("HELLO WORLD"); // hello world
 *
 * If given a value that is not a string, this function should not throw an error. HINT: you will need to exit out of the function early.
 * @example lowerCaseName(); // undefined (should not throw an error)
 * @example lowerCaseName(null); // undefined (should not throw an error)
 */

let lowerCaseName = (string) => {
  if (string) {
    let lowerCaseString = string.toLowerCase();
    return lowerCaseString;
  } else {
    return;
  }
};

console.log(lowerCaseName("TEST"));

/**
 * Create a function called "isEvenOrOdd".
 * If given an even number, it should return "even".
 * If given an odd number, it should return "odd".
 * @example isEvenOrOdd(10); // even
 * @example isEvenOrOdd(3); // odd
 */

let isEvenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEvenOrOdd(10));

/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 * @example countNumberOfDigits(5000); // 4
 */

let countNumberOfDigits = (num) => {
  num = num.toString();
  return num.length;
};

console.log(countNumberOfDigits(100));

/**
 * Ignore everything below this line. This is for the tests.
 */
let myExports = {
  printGreeting: () => {},
  timesFive: () => {},
  lowerCaseName: () => {},
  isEvenOrOdd: () => {},
  countNumberOfDigits: () => {},
};
try {
  //eslint-disable-next-line no-undef
  if (printGreeting) myExports.printGreeting = printGreeting;
  // eslint-disable-next-line no-undef
} catch (e) {}

try {
  //eslint-disable-next-line no-undef
  if (timesFive) myExports.timesFive = timesFive;
  // eslint-disable-next-line no-undef
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (lowerCaseName) {
    myExports.lowerCaseName = lowerCaseName;
    // eslint-disable-next-line no-undef
  }
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (isEvenOrOdd) {
    myExports.isEvenOrOdd = isEvenOrOdd;
    // eslint-disable-next-line no-undef
  }
} catch (e) {}

try {
  // eslint-disable-next-line no-undef
  if (countNumberOfDigits) {
    myExports.countNumberOfDigits = countNumberOfDigits;
    // eslint-disable-next-line no-undef
  }
} catch (e) {}

module.exports = myExports;
