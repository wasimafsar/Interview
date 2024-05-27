function start() {
  let timer;

  // debounce needs clearing of setTimeout
  // in both secenarious keep tracking timer or flag outside of event listener
  document.getElementById("name").addEventListener("keydown", function (event) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      debounce();
    }, 1000);
  });

  // throttle needs extra flag to track status
  // in both secenarious keep tracking timer or flag outside of event listener

  let limitCrossed = true;
  document.getElementById("button").addEventListener("click", function (event) {
    if (limitCrossed) {
      limitCrossed = false;
      throttle();
      setTimeout(() => {
        limitCrossed = true;
      }, 1000);
    }
  });
}

function debounce() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function throttle() {
  console.log("Button clicked");
}

start();
