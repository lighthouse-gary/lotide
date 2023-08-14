const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }
  
  else {
  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertEqual