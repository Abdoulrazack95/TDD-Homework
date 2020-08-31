/*
  Read carefully each test and use TDD thinking.
  Also test that the original array has not changed
*/

var getSecondThird = require("./get-second-third.js");

test("I want the second and third number after sorting the array", function () {
  //Arrange
  var input = [90, 5, 11, 8, 6];
  //Act
  var unchangeInput = [90, 5, 11, 8, 6];
  //Assert
  var expected = [6, 8];
  var output = getSecondThird(input);

  expect(output).toEqual(expected);
  expect(input).toEqual(unchangeInput);
});
