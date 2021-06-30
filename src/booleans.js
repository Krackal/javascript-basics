//Logical NOT(!)
const negate = a => {
  return !a;
};
//Logical AND(&&)
const both = (a, b) => {
  return a && b;
};
//Logical OR(||)
const either = (a, b) => {
  return a || b;
};
//Logical NOT(!) + Logical AND(&&)
const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) =>
  (!a && b) || (a && !b)


const truthiness = a => {
  if (a) {
    return true;
  }
  else {
    return false;
  }
};
// === strictly equal to
const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 !== 0;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  const square = Math.sqrt(a);
  return square * square === a;
};

const startsWith = (char, string) => {
  return string[0] === char;
};

const containsVowels = string => {
  const lowerCaseString = string.toLowerCase();
  return (
    lowerCaseString.includes("a") ||
    lowerCaseString.includes("e") ||
    lowerCaseString.includes("i") ||
    lowerCaseString.includes("o") ||
    lowerCaseString.includes("u")
  );
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
