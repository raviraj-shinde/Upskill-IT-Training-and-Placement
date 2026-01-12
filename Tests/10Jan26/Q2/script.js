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

let inp1 = document.getElementById("inp1");
let arr = [];

function displayArrayEle() {
  arr.push(inp1.value);
  clearOutput();
  printToOutput("Array: [" + arr + "]");

  inp1.value = null;
}

function sumArrEle() {
  let sum = 0;

  for (const element of arr) {
    sum += Number(element);
  }

  clearOutput();
  printToOutput(sum);
}

/********************************************/

function changeColor() {
  let p1 = document.querySelector(".p1");
  let p2 = document.querySelector(".p2");
  let p3 = document.querySelector(".p3");
  let p4 = document.querySelector(".p4");

  p1.style.backgroundColor = "aqua";
  p2.style.backgroundColor = "yellow";
  p3.style.backgroundColor = "pink";
  p4.style.backgroundColor = "green";

  const paragraphs = document.querySelectorAll(".p1, .p2, .p3, .p4");

  paragraphs.forEach((p) => {
    p.style.border = "2px solid red";
  });

}

function countAllPara(){
    const paragraphs = document.querySelectorAll("p");

    printToOutput(paragraphs.length);
    console.log(paragraphs.length);

    paragraphs.forEach((p) => {
      p.style.color = "green";
    })

}

