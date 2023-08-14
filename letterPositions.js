const letterPositions = function(sentence) {
  const positions = {};

  for (let i = 0; i < sentence.length; i++) {
    if (i !== ' ') {
      const char = sentence[i];

      if (!positions[char]) {
        positions[char] = [i];
      }

      else {
        positions[char].push(i);
      }
    }
  }

  return positions;
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


console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);