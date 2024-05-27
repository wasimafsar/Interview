// crreating objects in javacript is using function keyword , any new method can be added using prototype key word
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let person = new Person("Wasim");

// object created here , will only have properties or methods defined in prototype until above bottom prototype methods have no effect

console.log(person.getName());

Person.prototype.getAddress = function () {
  return "address";
};

console.log(person);
