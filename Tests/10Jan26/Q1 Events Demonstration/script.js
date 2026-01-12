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
let div3 = document.getElementById("mv");

btn1.addEventListener("click", function(e){
  alert("Button Clicked")
})


btn2.addEventListener("dblclick", function(){
  alert("Button Clicked")
})

div1.addEventListener("mouseover", function () {
  clearOutput();
  printToOutput("Mouse Over");
})

div2.addEventListener("mouseout", function () {
  clearOutput();
  printToOutput("Mouse Out");
})

div3.addEventListener("mousemove", function (e) {
  clearOutput();
  printToOutput("X: " + e.clientX + ", Y: " +  e.clientY);
})


/*******************************************************************/

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");

inp1.addEventListener("keyup", function (e){
  clearOutput();
  printToOutput("keyUp: "+ e.key)
})

inp2.addEventListener("keydown", function (e){
  clearOutput();
  printToOutput("keyDown: " + e.key)
})

/*******************************************************************/

let finp = document.getElementById("finp");

finp.addEventListener("change", function (e) {
  clearOutput();
  if(e.target.value > `a` && e.target.value < `z`){
    printToOutput("Value Allowed: " + e.target.value);
  } else {
    printToOutput("Value not Allowed: " + e.target.value);
  }
})

let form = document.getElementById("formm");

form.addEventListener("change", function (e) {
  clearOutput();
  alert("Form Submitted");
})