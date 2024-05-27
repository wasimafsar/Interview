function script() {
  document.getElementById("root").innerHTML = "Hello World!";
  const div = document.createElement("div");
  div.innerHTML = "Hello";
  document.body.appendChild(div);
  const p = document.createElement("p");
  p.innerHTML = "Inner P element ";
  p.classList.add("sob");
  div.appendChild(p);
}

script();
