const name = "ola"; // this is script source and not window scope
let obj = {
  name: "wasim",
  checkName: function () {
    console.log(this.name); // this will work since it is enclosing object
    setTimeout(function () {
      // normal function will keep setTimout in global scope and in global scope there is no name property , above name='ola' is in script scope see dcope and call stack in more detail by putting a debug point here
      console.log(this.name); // this will be undefined since this here is window or global object since in memeory phase it was added to global scope
    }, 3000);
  },
};

obj.checkName();

let obj2 = {
  name: "Wasim",
  checkName: function () {
    console.log(this.name);
    setTimeout(() => {
      // arrow functions keep scope to local so you saw name Wasim being printed here
      console.log(this.name); // name will now be inside obj2 scope or local scope and hence you will see name Wasim being printed
    }, 3000);
  },
};

obj2.checkName();
