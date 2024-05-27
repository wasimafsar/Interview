let circles = [];

function script() {
  document.getElementById("base").addEventListener("click", (event) => {
    console.log(event);
    const circle = document.createElement("div");
    const radius = Math.floor(Math.random() * 80 + 20);
    circle.style.width = 2 * radius + "px";
    circle.style.height = 2 * radius + "px";
    circle.classList.add("circle");
    circle.style.left = event.clientX - radius + "px";
    circle.style.top = event.clientY - radius + "px";
    this.detectOverlap(event.clientX - radius, event.clientY - radius, radius);
    circles.push({
      radius,
      x: event.clientX - radius,
      y: event.clientY - radius,
    });
    document.getElementById("base").appendChild(circle);
  });
}

function detectOverlap(x, y, radius) {
  // const map = new Map();
  // let distance = 0;
  // for (let i = 0; i < circles.length; i++) {
  //     distance = Math.sqrt((circles[i].x - circles[i+1].x) ** 2 + (circles[i].y - circles[i+1].y) ** 2);   // Sqrt((x2-x1)^2 + (y2-y1)^2)
  //     circles[i].radius + circles[i+1].radius > distance ? map.set(i, i+1) : null;
  // }

  for (let i = 0; i < circles.length; i++) {
    radius + circles[i].radius >
    Math.sqrt((x - circles[i].x) ** 2 + (y - circles[i].y) ** 2)
      ? console.log("Overlap")
      : null;
  }
}

script();
