/*
  Read carefully each test and use TDD thinking.
  Also test that the original array has not changed
*/

var addOne = require("./add-one.js");

test("Add 1 to each item in myArray", function () {
  //Arrange
  var myArray = [31, 57, 12, 5];
  var unchanged = [31, 57, 12, 5];
  //Act
  var expected = [32, 58, 13, 6];
  //Assert
  var output = addOne(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});
