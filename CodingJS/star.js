function star() {
  const names = ["abc", "def", "ghi", "jkl", "mno"];
  for (let i = 0; i < names.length; i++) {
    const option = document.createElement("option");
    option.value = names[i];
    document.getElementById("list").append(option);
  }

  document
    .getElementById("name")
    .addEventListener("keypress", function (event) {
      console.log(event);
      alert("You pressed a key inside the input");
    });

  const star1 = document.createElement("div");
  const star2 = document.createElement("div");
  const star3 = document.createElement("div");
  const star4 = document.createElement("div");
  const star5 = document.createElement("div");
  star1.classList.add("star");
  star2.classList.add("star");
  star3.classList.add("star");
  star4.classList.add("star");
  star5.classList.add("star");
  document.getElementById("root").appendChild(star1);
  document.getElementById("root").appendChild(star2);
  document.getElementById("root").appendChild(star3);
  document.getElementById("root").appendChild(star4);
  document.getElementById("root").appendChild(star5);
  star1.addEventListener("click", function () {
    reset();
    star1.classList.add("star-clicked");
  });
  star2.addEventListener("click", function () {
    reset();
    star1.classList.add("star-clicked");
    star2.classList.add("star-clicked");
  });
  star3.addEventListener("click", function () {
    reset();
    star1.classList.add("star-clicked");
    star2.classList.add("star-clicked");
    star3.classList.add("star-clicked");
  });
  star4.addEventListener("click", function () {
    reset();
    star1.classList.add("star-clicked");
    star2.classList.add("star-clicked");
    star3.classList.add("star-clicked");
    star4.classList.add("star-clicked");
  });
  star5.addEventListener("click", function () {
    reset();
    star1.classList.add("star-clicked");
    star2.classList.add("star-clicked");
    star3.classList.add("star-clicked");
    star4.classList.add("star-clicked");
    star5.classList.add("star-clicked");
  });
}

function reset() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.classList.remove("star-clicked");
  });
}

star();
