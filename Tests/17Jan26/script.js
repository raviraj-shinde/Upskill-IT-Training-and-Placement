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

/****************************** Fibonacci Series *********************************/

//0 1 1 2 3 5 8(6) 13(7) 21(8)....

function printFibonacci(n) {
  if (n == 0) return 0;
  else if (n == 1) return 1;

  return printFibonacci(n - 1) + printFibonacci(n - 2);
}

/****************************** Remove Duplicate Ele from array *********************************/

let arr = [0, 1, 2, 3, 1, 2, 1, 10, 20]; //Duplicates: 1, 2

//sort and remove or using hash
function removeDuplicates() {
  arr.sort((a, b) => a - b); //asc
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      newArr.push(arr[i]);
    } 
  }

  return newArr;
}

/****************************** Second Largest Ele of an Array *********************************/

let arr2 = [10, 25, 11, 35, 69, 75, 100, 99]; //ans: 99 is the second largest

function findSecondLargest() {
  arr2.sort((a, b) => b - a); //DSC
  return arr2[1];
}



/****************************** Print Digonal Array *********************************/

let arr2d = [[1, 2, 3, 4], [5, 6 ,7, 8], [9, 10 ,11, 12], [13, 14 , 15, 16]]; //1 - 6 - 11 - 16

for(let i = 0; i < arr2d.length; i++){
  printToOutput(arr2d[i][i]);
}

printToOutput("\n");

for(let i = arr2d.length-1; i >= 0; i--){
  printToOutput(arr2d[i][i]);
}