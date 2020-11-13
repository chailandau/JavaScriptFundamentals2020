/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

(function () { 

// Adds role attribute
let alertRole = document.querySelectorAll(".alert-danger");

for (let alert of alertRole) {
  alert.setAttribute("role", "alert");
}


// Changes link
let changeLink = document.querySelector("#change_link");

changeLink.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript";


// Changes text
let changeText = document.querySelector("#change_text");

changeText.textContent = "I am victorious!";


// Changes background color
let changeBackground = document.querySelector("#change_background");

changeBackground.style.backgroundColor = "#c1bdff";


// Changes text color
let changeColor = document.querySelector("#change_color");

changeColor.classList.add("text-primary");


// Hides div
let hideMe = document.querySelector("#hide_me");

hideMe.style.display = "none";


// Shows div
let showMe = document.querySelector(".hidden");

showMe.classList.remove("hidden");


// Conditional logic
let myButton = document.querySelector("#my_button");
let conditionalDiv = document.querySelector("#conditional_div");

if(myButton.classList.contains("btn-primary")) {
  conditionalDiv.textContent = "✓ blue";
}


})();