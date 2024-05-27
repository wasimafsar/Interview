function test() {
  console.log("test");
  this.name = "Name";
}

//test();

const ab = new test();
ab.name = "ola";
console.log(ab);

test.prototype.lastName = "Afsar";

const cd = new test();

console.log(cd.name);
console.log(ab.lastName);
console.log(cd.lastName);

/*

Created object using function keyword and created a variable name in start 

value of name changed for object ab but will have no impact on newly created object cd 

After ab creation and before cd creation , added a new property lastName inside prototype object of test object and this newly added property will be available 

in both the objects ab and cd 


*/
