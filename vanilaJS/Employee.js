class Employee {
  constructor() {}
  getName() {
    this.name = "ola";
    console.log("Get Name");
  }
  getData() {
    const data = null;
    // fetch("https://ubahthebuilder.tech/posts/1").then((response) =>
    //   console.log(response)
    // ),
    //   (err) => console.log("Failed");
  }
}

class Student extends Employee {
  getStudent() {
    console.log("I am student extending Employee class ");
    this.getName();
    this.name = "Student";
    console.log(this.name); // this will print Student , if line 19 was moved above line 18 it will print ola
    this.getData();
  }
}

class Teacher extends Student {
  getTeacher() {
    this.getStudent();
    this.getName();
    this.getData();
  }
}

export { Employee, Student, Teacher };

/*

Extends work normally , we can call methods of parent class from child class, any update in property value will happen in code executionm order . 

JS supports multi level inheritance but not multiple inheritance 

*/
