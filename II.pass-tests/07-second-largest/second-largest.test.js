/*
  Read carefully each test and use TDD thinking.

*/
var secondLargest = require("./second-largest");

test("Second largest", function () {
  var numbers = [2, 0, 23, 23, 57, 1];

  var output = secondLargest(numbers);

  expect(output).toEqual(23);
});
