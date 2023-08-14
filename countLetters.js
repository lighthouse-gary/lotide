

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑Assertion Passed🤑: [${actual}] === [${expected}]`);
    return;
  }

  console.log(`👿Assertion Failed👿: [${actual}] !== [${expected}]`);
};

const countLetters = function(sentence) {
  // Initialize an empty object to store the count of each letter
  const letterCounts = {};

  // Iterate through each character of the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== ' ') {
      if (letterCounts[char]) {
        letterCounts[char] += 1;
      }

      else {
        letterCounts[char] = 1;
      }
    }
  }
  console.log(letterCounts);
  return letterCounts;
};

countLetters('jason siebert jipp')

