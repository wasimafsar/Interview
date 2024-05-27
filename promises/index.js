//basic promise see function description via intellisense
function first() {
  const promise = new Promise(function (resolve, reject) {
    resolve(10);
    reject(100);
  });

  promise.then((result) => {
    console.log(result);
  }),
    (rejected) => {
      console.log(rejected);
    };
}

first();

// remember if processing is required then u need function else a normal parameter
// this is if it confuses u when it should be function or not
// refer function signature
