/*Create and Append Element*/
let listCount = 1;
let li;

function createLi(){
    li = document.createElement("li");
    li.innerText = "Element " + listCount++; 
    alert("empty <li></li> created \nNow, You can add to ul");
}

function appendLi(){
    let ol = document.getElementById("test-ol");
    if(li != null) ol.appendChild(li);
    li = null;
}

function CreateNAppend(){
    createLi();
    appendLi();
}


function removeLastLi(){
    let ol = document.getElementById("test-ol");
    ol.lastElementChild.remove();
}