let inputEle = document.getElementById("inputElement");
let username = document.getElementById("username");

let generateUsername = (e) => {
  username.innerHTML = e.target.value.split(" ").join("-");
};
let debounce = function (cb, delay) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, arguments);
    }, delay);
  };
};

inputEle.addEventListener("keyup", debounce(generateUsername, 300));

// refer debounce vs throttle youtube shorts

// throttle used when u click on button just send 1 request , no matter what actions u do one action every timer time
// debounce entering something in text box reduce number of api calls , old timer clears anew timer start every time u type
