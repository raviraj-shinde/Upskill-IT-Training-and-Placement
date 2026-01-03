//Greet Test

function greet() {
  let div = document.getElementById("d-hidden-msg");

  //create h3 ele
  let h3 = document.createElement("h3");
  h3.textContent = "Happy New Year 🎉 ...!";
  h3.classList.add("h3-msg");
  console.log("Happy New Year 🎉 ...!");

  div.appendChild(h3);
}

//Odd-Even test
function validate(num) {
  let msg;

  if (num < 0) {
    msg = "Invalid Number: Number should be positive";
    alert("Invalid Number: Number should be positive");
  } else if (num % 2 == 0) {
    msg = num + " is a Even Number✅";
  } else {
    msg = num + " is a Odd Number❌";
  }

  return msg;
}

function test() {
  const num = document.getElementById("test-num").value;
  let msg = validate(num);

  const div = document.getElementById("d-output");

  //create h3 ele
  let h3 = document.createElement("h3");
  h3.textContent = msg;

  h3.classList.add("output-h3");
  if (msg.startsWith("Invalid")) {
    h3.classList.add("output-h3-warning");
  }
  

  div.appendChild(h3);
}
