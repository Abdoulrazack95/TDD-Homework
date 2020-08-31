var largerThanTen = require("./numbersGreaterThan10");

/*
  Read carefully each test and use TDD thinking.
*/

test("Get numbers greater than 10", function () {
  //Arrange
  var input = [4, 10, 32, 9, 21];
  //Act
  var expected = [32, 21];
  //Assert
  var output = largerThanTen(input);
  expect(output).toEqual(expected);
});
