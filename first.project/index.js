// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

// Characters remaining.
const textArea = document.getElementById("textarea");
const remainingCharsText = document.getElementById("textarea-remaining-chars");
const maxChars = 250;

textArea.addEventListener("input", () => {
  const remaining = maxChars - textArea.value.length;
  const color = remaining < maxChars * 0.1 ? "red" : null;
  remainingCharsText.textContent = `${remaining} caractere ramase`;
  remainingCharsText.style.color = color;
});
// Submit button name missing
function checkforblack() {
  if (document.getElementById("name").value == "") {
    alert("Trebuie sa introduci un nume");
    return false;
  }
}

// Galerry JS
filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

const btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
