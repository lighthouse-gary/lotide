const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const objectsAreEqual = eqObjects(actual, expected);

  if (objectsAreEqual) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
  }

  else {
    console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectEqual(shirtObject, anotherShirtObject);
assertObjectEqual(shirtObject, longSleeveShirtObject);
assertObjectEqual(longSleeveShirtObject, longSleeveShirtObject);