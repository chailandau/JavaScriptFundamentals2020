const buttons = document.querySelectorAll('[data-target="money"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let button = event.currentTarget;
    button.disabled = "disabled";
    button.textContent = "Submitting...";
  });
});

const name = document.querySelector("#name");
const output = document.querySelector("#name_output");

name.addEventListener("change", (event) => {
  output.textContent = event.target.value;
});


const checkboxes = document.querySelectorAll(".form-check-input");
const checkboxOutput = document.querySelector("#check_output");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    checkboxOutput.textContent = event.target.value;
  });
});

const myForm = document.querySelector("#my_form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newOutput = "";

  [...event.target.elements].forEach((element) => {
    if (element.value) newOutput =+ `${element.value}`;
  });

  const outputDiv = document.querySelector("#output_div");

  outputDiv.textContent = newOutput;

});


const putButtonHere = document.querySelector("#put_button_here");

const createButton = document.createElement("button");

createButton.textContent = "Click me!";

createButton.classList.add("btn", "btn-primary");

putButtonHere.appendChild(createButton);