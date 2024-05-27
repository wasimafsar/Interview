/* this is ts file we can use tsc compiler to convert 
ts interface only in ts file. 
browsers dont understnd these so coneversion to js required . 
In this example I have used online ts to js converter nad copied bottom code to generate js file and updated index.html file 


*/

class Persons {
  private name: String;
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let newPerson = new Persons("Wasim");
