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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const isEquals = eqArrays(arrayOne, arrayTwo);
  assertEqual(isEquals, true);
};

const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);
  const emptyArray = [];

  if (array.length <= 2) {
    console.log(emptyArray);
    return emptyArray;
  }

  else if (array.length % 2 === 0) {
    console.log([array[midIndex - 1], array[midIndex]]);
    return [array[midIndex - 1], array[midIndex]];
  }

  console.log(array[midIndex]);
  return [array[midIndex]];
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]