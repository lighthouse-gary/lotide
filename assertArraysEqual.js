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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 12, 3], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 22, 3]); // => should FAIL
assertArraysEqual([1, 2, 12], [1, 2, 12, 13]); // => should FAIL