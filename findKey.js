const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key
    }
  }
  return undefined;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// Test cases
const data = {
  a: 5,
  b: 10,
  c: 15,
  d: 20
};

const resultKey1 = findKey(data, value => value > 12);
assertEqual(resultKey1, 'c'); // Should pass

const resultKey2 = findKey(data, value => value < 5);
assertEqual(resultKey2, undefined); // Should pass

const resultKey3 = findKey(data, value => value === 10);
assertEqual(resultKey3, 'b'); // Should pass

const resultKey4 = findKey(data, value => value > 100);
assertEqual(resultKey4, undefined); // Should pass