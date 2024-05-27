function script() {
  const name = "Wasim";
  console.log(name.slice(0, 3));
  console.log(name.split(""));
  const student = {
    firstName: "Wasim",
    lastName: "Afsar",
  };
  console.log(`The full name is ${student.firstName} ${student.lastName}`);
  const num = 565656767;
  console.log(num.toString());
  const arr = ["a", "b", "c", "d"];
  arr.forEach((item, index) => {
    console.log(item, index);
  });
  const newArray = arr.map((item, index) => {
    return (item = item + index);
  });
  console.log(newArray);
  console.log(arr.join(""));
  console.log(arr.flat(Infinity));
  console.log(arr.find((value) => value === "a"));
  const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const final = arra.reduce((acc, value) => {
    return acc + value;
  }, 0);
  console.log(final);
  const isBig = arra.every((value, index, arr) => {
    return value > 5;
  });
  console.log(isBig);

  // SET

  const set = new Set([1, 2, 3, 4, 5]);
  console.log(set.has(1));
  console.log(set.keys());
  for (let i of set.keys()) {
    console.log(i);
  }
  console.log(set.values());

  //MAP

  const map = new Map();
  map.set("name", "Wasim");
  map.set("age", 23);
  console.log(map.get("name"));
  for (let i of map.values()) {
    console.log(i);
  }

  try {
  } catch (err) {
    console.log(err);
  }

  class Car {
    constructor(name, model) {
      this.name = name;
      this.model = model;
    }
    getCar() {
      return `The car name is ${this.name} and model is ${this.model}`;
    }
  }

  class Audi extends Car {
    constructor(name, model, color) {
      super(name, model);
      this.color = color;
    }
    getCar() {
      return `The car name is ${this.name} and model is ${this.model} and color is ${this.color}`;
    }
  }
  const car = new Car("Audi", "A8");
  console.log(car.getCar());
  const audi = new Audi("Audi", "A8", "Black");
  console.log(audi.getCar());

  const person = {
    name: "Wasim",
    lastName: "Afsar",
  };

  Object.keys(person).forEach((key) => {
    console.log(key);
  });
  Object.values(person).forEach((value) => {
    console.log(value);
  });

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  const person1 = new Person("Wasim", 23);
  Person.prototype.getDetails = function () {
    return `The name is ${this.name} and age is ${this.age}`;
  };
  console.log(window);
  console.log(screen);
}

script();
