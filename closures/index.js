// closures help in encapsulation , data privacy , state preserving and also wait to do a callback operation once ashynchronous action is done
function outer() {
  let outerVariable = 10;
  function inner() {
    console.log(outerVariable);
  }
  inner();
}

outer();
// inner function can access varaibles of outer function even though the outer function is done executing

function outerFn() {
  let outerV = 10;
  function innerFun() {
    setTimeout(() => {
      outerV = 20;
      setTimeout(() => {
        console.log(outerV);
      }, 3000);
    }, 1000);
  }
  innerFun();
}

outerFn();
