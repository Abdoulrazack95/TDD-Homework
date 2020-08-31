function removeVowelsForWords(words) {
  var result = words.map(function (word) {
    return word.replace(/[aeiou]/gi, "");
  });

  return result;
}

module.exports = removeVowelsForWords;

// What your code should do
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
