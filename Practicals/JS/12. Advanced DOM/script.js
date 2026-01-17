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


let inp = document.getElementById("inp-pass");
let btn = document.getElementById("btn-toggle");

let showPass = 0;

function toggleShow () {
  //toggle 1-> show,  0 -> not
  console.log("working");
  if(showPass === 0){
    inp.type = "password"; //hide
    btn.innerText = "👁️ Show";
    showPass = 1;
  } else{
    inp.type = "text"; //show
    btn.innerText = "🔑 Hide";
    showPass = 0;
  }
}