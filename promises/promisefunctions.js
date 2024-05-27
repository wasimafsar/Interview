function first() {
  const promise = fetch("https://dog.ceo/api/breeds/image/random").then(
    (resolve) => {
      //console.log(resolve);
    },
    (reject) => {}
  );

  const promise1 = fetch("https://dog.ceo/api/breeds/image/random");
  const promise2 = fetch(
    "https://api.ipify.org?format=jsonndskjndfkjbfndkjfbdkjbf"
  );
  const promise3 = fetch("https://ipinfo.io/161.185.160.93/geo");
  //const promise3 = fetch("https://abraka");

  Promise.all([promise1, promise2, promise3]).then(
    // promise.all returns array of success responses , if one of the promises fail it moves to reject block
    // promise.allSettled executes all whethere opassed or rejected so allSettled is better
    (resolve) => {
      console.log(resolve);
    },
    (reject) => {
      console.log("error");
    }
  );

  const promise4 = fetch("https://dog.ceo/api/breeds/image/random");
  const promise5 = fetch(
    "https://api.ipify.org?format=jsonndskjndfkjbfndkjfbdkjbf"
  );
  const promise6 = fetch("https://ipinfo.io/161.185.160.93/geo");

  Promise.any([promise4, promise5, promise6]).then(
    // if there are multiple promises , with any which ever passes first will be the only one to be resolved even if there were failures on its way
    (resolve) => {
      console.log(resolve);
    },
    (reject) => {
      console.log(reject);
    }
  );

  Promise.race([promise4, promise5, promise6]).then(
    // if there are multiple promises , with race which ever passes/fails first will be the only one to be resolved
    (resolve) => {
      console.log(resolve);
    },
    (reject) => {
      console.log(reject);
    }
  );
}

first();

// const promise = fetch("").then(
//   (result) => console.log("ola"),
//   (reject) => console.log("owa")
// );
