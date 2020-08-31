function greetPeople(people) {
  var greeting = "Hello ";

  return people.map((person) => greeting + "" + person);
}

module.exports = greetPeople;

// What your code should do
// input: ["Iman", "Zee", "Bouchra"]
// expected output: ["Hello Iman", "Hello Zee", "Hello Bouchra"]
