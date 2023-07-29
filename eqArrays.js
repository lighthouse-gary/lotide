const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return true;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
}

const eqArrays = function(arrayOne, arrayTwo,) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (i =0;  i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 12, 3], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 22, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 12], [1, 2, 12]), true); // => should PASS
assertEqual(eqArrays([1, 2, 12,], [1, 2, 12, 13]), false); // => should PASS
