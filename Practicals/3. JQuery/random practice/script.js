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

$(document).ready(function () {
  
  //Evemt Object
  $("#box").on("click", function (e) {
    printToOutput(e.type);
    printToOutput(e.target);
    alert("Box Clicked");
  });

  $("#box2").on("dblclick", function (e) {
    printToOutput(e.type);
    printToOutput(e.target);
    alert("Box Double Clicked");
  });

  $("#box3").on("mouseout", function (e) {
    clearOutput();
    printToOutput("Mouse Out:");
    printToOutput("X: " + e.pageX);
    printToOutput("Y: " + e.pageY);
  });

  $("#box3").on("mousemove", function (e) {
    clearOutput();
    printToOutput("X: " + e.pageX);
    printToOutput("Y: " + e.pageY);
  });

  //Binding and Unbinding Example
  $("#btn").on("click", () => {
    //Binding
    let timeSec = 6;
    $("#btn").off("click").html("Clicked").append("<span></span>"); //Unbinding

    let intervalId = setInterval(() => {
      timeSec--;
      $("#btn > span").html(` Wait: ${timeSec}`); //Update time

      if (timeSec === 0) {
        clearInterval(intervalId);
        window.open("https://www.google.com", "_blank");

        $("#btn > span").html("");
      }
    }, 1000);

  });

  //Show/Hide/Toggle -> Visibility Filter
  let show = 0;
  $("#btn2").on("click", () => {
    $("#d-visibility").hide();

    $("#btn3").html("Show");

  })

});
