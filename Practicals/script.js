const it1 = document.querySelector(".it1"); // get element by class
const it2 = document.querySelector(".it2"); // get element by class
const it3 = document.querySelector(".it3"); // get element by class
const it4 = document.querySelector(".it4"); // get element by class
const it5 = document.querySelector(".it5"); // get element by class

it1.addEventListener("click", () => {
  const items = document.querySelectorAll(".box"); // gets all 3
  items.forEach((item) => {
    item.id = "p-static";
  });
});

it2.addEventListener("click", () => {
    const box2 = document.querySelector(".box-2");
    box2.id = "p-relative";
});

it3.addEventListener("click", () => {
    const box2 = document.querySelector(".box-2");
    box2.id = "p-absolute";
});

it4.addEventListener("click", () => {
    const box2 = document.querySelector(".box-2");
    box2.id = "p-fixed";
});

it5.addEventListener("click", () => {
    const box2 = document.querySelector(".box-2");
    box2.id = "p-sticky";
});