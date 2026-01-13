function printToOutput(data) {
  let outputDiv = document.getElementById("output");
  let div = document.createElement("div");
  div.innerText = data;
  outputDiv.appendChild(div);
}

function clearOutput() {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "";
}

/*******************************************************************/

function openGoogle() {
  window.open("https://www.google.com", "_blank");
}

let timer = 10;
let span = document.getElementById("span");
let btn = document.getElementById("btn");

let intervalId = setInterval(() => {
  timer--;
  span.innerText = `Wait for: ` + timer;

  if (timer === 0) {
    btn.onclick = openGoogle;
    btn.classList = ["btn"];
    clearInterval(intervalId);
  }
}, 1000);


//setTimeout and clearTimeout()
let timerId = setTimeout(() => {
  let d = document.createElement("div");
  d.classList = ["login"];
  d.innerText = "Click here to give permission";

  d.onclick = function () {
    d.style.display = "none";
  };

  let html = document.querySelector("html");
  html.appendChild(d);
}, 2000);
