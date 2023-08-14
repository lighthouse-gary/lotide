const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(arrayOne, arrayTwo,) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const isEquals = eqArrays(arrayOne, arrayTwo);
  assertEqual(isEquals, true);
};

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])