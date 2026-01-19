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

let btn1 = document.getElementById("click");
let btn2 = document.getElementById("dbl");
let div1 = document.getElementById("mo");
let div2 = document.getElementById("mout");

btn1.addEventListener("click", function(e){
  alert("Button Clicked")
})


btn2.addEventListener("dblclick", function(){
  alert("Button Clicked")
})

div1.addEventListener("mouseover", function (e) {
  printToOutput(e.clientX + " , " + e.clientY);
})

div2.addEventListener("mouseout", function (e) {
  printToOutput(e.clientX + " , " + e.clientY);
})