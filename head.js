// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
};

const head = function() {
  return head[0];
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 'undefined');
assertEqual(head[5], 5);