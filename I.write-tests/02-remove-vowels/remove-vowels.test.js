var removeVowels = require("./remove-vowels");

/*
    These tests are testing the removeVowels function based on each test.
    Read carefully each test and use TDD thinking.
*/
test("remove the vowel", function () {
  // Arrange
  var vowelRemoved = "Hi";
  // Act
  var expected = "H";
  // Assert
  var output = removeVowels(vowelRemoved);
  expect(output).toEqual(expected);
});

test("does not remove y from the word", function () {
  // Arrange
  var letterY = "y";
  // Act
  var expected = "y";
  // Assert
  var output = removeVowels(letterY);
  expect(output).toEqual(expected);
});

// test for uppercasse

test("remove uppercase vowels", function () {
  // Arrange
  var removeUpper = "HI";
  // Act
  var expected = "H";
  // Assert
  var output = removeVowels(removeUpper);
  expect(output).toEqual(expected);
});

// test special characters

test("remove special character", function () {
  // Arrange
  var removeSpecialChar = "~!@#$%^&*()-_=+[]{}|;':\",./<>?";
  // Act
  var expected = "";
  // Assert
  var output = removeVowels(removeSpecialChar);
  expect(output).toEqual(expected);
});

// test all consonants

test("check all consonants", function () {
  // Arrange
  var keepCons = "BCDFGHJKLMNPQRSTVXZ";
  // Act
  var expected = "BCDFGHJKLMNPQRSTVXZ";
  // Assert
  var output = removeVowels(keepCons);
  expect(output).toEqual(expected);
});

// test all vowel

test("remove all vowels", function () {
  // Arrange
  var noVowels = "aeiouAEIOU";
  // Act
  var expected = "";
  // Assert
  var output = removeVowels(noVowels);
  expect(output).toEqual(expected);
});

// test nothing

test("empty array", function () {
  // Arrange
  var emptyString = "";
  // Act
  var expected = "";
  // Assert
  var output = removeVowels(emptyString);
  expect(output).toEqual(expected);
});
