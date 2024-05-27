function start() {
  let date;

  setInterval(() => {
    date = new Date();
    document.getElementById("hour").style.transform = `rotate(${
      date.getHours() * 30
    }deg)`;
  }, 1000);
}

start();
