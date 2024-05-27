function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first(); // try them on browser sources to see code flow in stack . The "ananymous" in call stack is Execution Context
// see call stack to see the flow of code , can see where it started from , where it started from will be at the bottom of call stack
