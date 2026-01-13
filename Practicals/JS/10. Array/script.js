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

/**************************** * CODE * *************************************/

let arr = [];

for (let i = 0; i < 4; i++) {
  let num = parseInt(prompt("Enter Num " + (i + 1) + " :- "));
  arr[i] = num;
}

/**************************** 2 ***************************************/

function showArrEle() {
  for (let i = 0; i < arr.length; i++) {
    printToOutput("Value at " + i + " Index : " + arr[i]);
  }
}

showArrEle();

printToOutput("\n");

/****************************** 3 *************************************/

//Reverse an Array

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

printToOutput("Reversed Array: " + arr);
printToOutput("\n");


/****************************** 4 *************************************/

let arr2 = [
  1,
  "1",
  { num: "zero" },
  () => {
    console.log("hello");
  },
];

printToOutput(arr2);
printToOutput("\n");


/***************************** 5 **************************************/

let sum = arr.reduce((sum, num) => sum + num, 0);
printToOutput("Sum of inpput arr:- " + sum);
printToOutput("\n");


/***************************** 6 **************************************/

let arr3 = [
  [1, 2],
  [2, 4]
];

let data = "[ ";
for (let i = 0; i < arr3.length; i++) {
  data += "[ ";
  for (let j = 0; j < arr3[i].length; j++) {
    data += arr3[i][j] + ",";
  }
  data += "], ";
}
printToOutput(data + " ]");
printToOutput("\n");



/***************************** Sort Array **************************************/

let arr4 = [...arr].sort((a, b) => a-b); //ASC
let arr5 = [...arr].sort((a, b) => b-a); //DSC

printToOutput("Ascending Order Sort: " + arr4);
printToOutput("Descending Order Sort: " + arr5);
printToOutput("\n");
