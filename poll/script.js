function start() {
  document.getElementById("1").addEventListener("change", function (e) {
    alert("You have selected " + e.target.value);
  });
}

start();
