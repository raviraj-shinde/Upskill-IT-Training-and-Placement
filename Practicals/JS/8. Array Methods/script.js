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

//Array Methods

let arr = [1, "two", 3, 5];

arr.push("six");  //[1, "two", 3, 5, "six"];
printToOutput(`push("six") =   ` + arr);

arr.pop(); //[1, "two", 3, 5];
printToOutput("pop() =   " + arr);


arr.unshift("zero"); //["zero", 1, "two", 3, 5];
printToOutput(`unshift("zero) =   ` + arr);

arr.shift(); //[1, "two", 3, 5];
printToOutput(`arr.shift() =   ` + arr);


let arr2 = [10, 20, 30];
let combinedArr = arr.concat(arr2);
printToOutput(`arr.concat(arr2) =   ` + combinedArr); //[1, "two", 3, 5, 10, 20, 30];

let slicedArray = combinedArr.slice(4,7); //7 is Exclusion, also it gives new array
printToOutput(`combinedArr.slice(4,7) =   ` +slicedArray);


combinedArr.splice(4,3,0,2,3); 
printToOutput(`combinedArr.splice(4,3,0,2,3) =   ` + combinedArr); ////[1, "two", 3, 5, 0, 2, 3];


/***************************************************/



