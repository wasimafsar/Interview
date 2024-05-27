var Persons = /** @class */ (function () {
  function Persons(name) {
    this.name = name;
  }
  Persons.prototype.getName = function () {
    return this.name;
  };
  return Persons;
})();
var newPerson = new Persons("Wasim");

console.log(newPerson.getName());
