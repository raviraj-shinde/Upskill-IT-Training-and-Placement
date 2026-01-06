function claculate(operation) {
  clearOutput();
  let inp1 = document.getElementById("inp1").value;
  let inp2 = document.getElementById("inp2").value;
  let output;

  inp1 = Number(inp1);
  inp2 = Number(inp2);

  switch (operation) {
    case 1:
      output = inp1 + inp2;
      break;

    case 2:
      output = inp1 - inp2;
      break;

    case 3:
      output = inp1 * inp2;
      break;

    case 4:
      output = inp1 / inp2;
      break;

    default:
      alert("Invalid operation");
      return;
  }

  console.log(output);
  printToOutput(output);
}

function claculate2() {
  clearOutput();
  let exp = document.getElementById("exp").value;

  if (exp == "+") claculate(1);
  else if (exp == "-") claculate(2);
  else if (exp == "*") claculate(3);
  else claculate(4);
}

function printDecreasing() {
  clearOutput();
  let num = Number(document.getElementById("num").value);

  while (num > 0) {
    console.log(num);
    printToOutput(num);
    num--;
  }
}

function executeCode() {
  clearOutput();

  let i = 1;
  while (i <= 3) {
    let output = "";
    let j = 1;
    while (j <= 3) {
      //print j
      output += j + " ";
      j++;
    }
    printToOutput(output);
    i++;
  }
}

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
