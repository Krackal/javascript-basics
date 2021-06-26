const add = (a, b) => {
  return a+b;
  console.log(add(2,1));
  console.log(add(15,76));
  console.log(add(12,0));
  console.log(add(10,-5));
};

const subtract = (a, b) => {
  return a-b;
  console.log(subtract(1,2));
  console.log(subtract(2,1));
  console.log(subtract(1,-2));
  console.log(subtract(-2,1));
  console.log(subtract(-1,-1));
};

const multiply = (a, b) => {
  return a*b;
  console.log(multiply(10,3));
  console.log(multiply(-11,5));
  console.log(multiply(-4,-9));
};

const divide = (a, b) => {
  return a/b;
  console.log(divide(20,5));
  console.log(divide(5,2));
  console.log(divide(2,5));
  console.log(divide(10,3));
};

const power = (a, b) => {
  return a**b;
  console.log(power(5, 2));
  console.log(power(2, 3));
  console.log(power(10, 5));
};

const round = a => {
  return Math.round(a)
  console.log(Math.round(2.1));
  console.log(Math.round(9.7));
  console.log(Math.round(5.5));
};

const roundUp = a => {
  return Math.ceil(a)
  console.log(Math.ceil(2.1));
  console.log(Math.ceil(9.7));
  console.log(Math.ceil(5.5));
};

const roundDown = a => {
  return Math.floor(a)
  console.log(Math.floor(2.1));
  console.log(Math.floor(9.7));
  console.log(Math.floor(5.5));
};

const absolute = a => {
  return Math.abs(a)
  console.log(Math.abs(-1));
  console.log(Math.abs(1));
  console.log(Math.abs(0));
};

const quotient = (a, b) => {
  return ~~(a/b);
  console.log(~~(10/3));
  console.log(~~(18/7));
  console.log(~~(77/10));
  console.log(~~(-9/2));
};

const remainder = (a, b) => {

  /*The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.*/

  return (a%b);
  console.log(10%3);
  console.log(18%7);
  console.log(77%10);
  console.log(-9%2);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
