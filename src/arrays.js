const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  }
};

//join() returns array as a string
const arrayToCSVString = array => {
  return array.join(",");
};

//split() divides a string into an ordered list of substrings, puts them into an array, then returns the array
const csvStringToArray = string => {
  return string.split(",");
};

// Push() adds an item to the end of an array
const addToArray = (element, array) => {
  array.push(element);
};

//Concat() used to join two or more arrays.
const addToArray2 = (element, array) => {
  let array2 = array.concat(element);
  return array2;
};

//removes or replaces existing elements.
const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

//use split() to convert numbers to strings.
const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};


const uppercaseWordsInArray = strings => {
  return strings.map(element => {
    return element.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  return strings.map(element => {
    return element
      .split("")
      .reverse()
      .join("")
  });
};

const onlyEven = numbers => {
  return numbers.filter(num => {
    return num % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
  arrayCopy = array.slice(0, array.length);
  arrayCopy.splice(index, 1);
  return arrayCopy;
};

const elementsStartingWithAVowel = strings => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let items = [];
  for (i = 0; i < vowels.length; i += 1) {
    for (j = 0; j < strings.length; j++) {
      if (strings[j].charAt(0) === vowels[i]) {
        items.push(strings[j])
      }
    }
  }
  return items;

  /*return strings.filter(string => {
    return (
      string[0] === "a" ||
      string[0] === "a" ||
      string[0] === "e" ||
      string[0] === "i" ||
      string[0] === "o" ||
      string[0] === "u" ||
      string[0] === "A" ||
      string[0] === "E" ||
      string[0] === "I" ||
      string[0] === "O" ||
      string[0] === "U" ||);
  };*/
};

const removeSpaces = string => {
  let removeSpaceString = string.replace(/ /g, "");
  return removeSpaceString;
};

const sumNumbers = numbers => {
  const add = (a, b) => a + b;
  return numbers.reduce(add);
};

const sortByLastLetter = strings => {
  strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
