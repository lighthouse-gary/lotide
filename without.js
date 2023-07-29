const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
};

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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const isEquals = eqArrays(arrayOne, arrayTwo);
  assertEqual(isEquals, true);
};

const without = function(source, itemsToRemove) {
  const newArray = [];

  for(i = 0; i < source.length; i++) {
   const item = source[i];
   let found = false;

for(j = 0;  j < itemsToRemove.length; j++) {
  if(item === itemsToRemove[j]) {
    found = true;
    break;
  }
}

   if(!found) {
    newArray.push(item);
   }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);