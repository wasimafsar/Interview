let xFlag = false;

function start() {
  const div1 = document.getElementById("1");
  const div2 = document.getElementById("2");
  const div3 = document.getElementById("3");
  const div4 = document.getElementById("4");
  const div5 = document.getElementById("5");
  const div6 = document.getElementById("6");
  const div7 = document.getElementById("7");
  const div8 = document.getElementById("8");
  const div9 = document.getElementById("9");

  div1.addEventListener("click", () => {
    this.render(div1);
  });
  div2.addEventListener("click", () => {
    this.render(div2);
  });
  div3.addEventListener("click", () => {
    this.render(div3);
  });
  div4.addEventListener("click", () => {
    this.render(div4);
  });
  div5.addEventListener("click", () => {
    this.render(div5);
  });
  div6.addEventListener("click", () => {
    this.render(div6);
  });
  div7.addEventListener("click", () => {
    this.render(div7);
  });
  div8.addEventListener("click", () => {
    this.render(div8);
  });
  div9.addEventListener("click", () => {
    this.render(div9);
  });
}

start();

function render(node) {
  if (!xFlag) {
    node.appendChild(document.createTextNode("X"));
    xFlag = true;
  } else {
    node.appendChild(document.createTextNode("O"));
    xFlag = false;
  }
}
