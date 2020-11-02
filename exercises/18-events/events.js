(function () {



/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */

const alertButton = document.querySelector("#alert_button");

alertButton.addEventListener("click", () => {
  window.alert("You have been alerted!");
});


/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */

const creditCardButton = document.querySelector("#credit_card_button");

creditCardButton.addEventListener("click", () => {
  creditCardButton.disabled = "disabled";
  creditCardButton.textContent = "Loading...";
});

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

const viewCommentsButton = document.querySelector("#view_comments_button");
const commentsSection = document.querySelector("#comments_section");

viewCommentsButton.addEventListener("click", () => {
  if (commentsSection.classList.contains("hidden")) {
     commentsSection.classList.remove("hidden");
    viewCommentsButton.textContent = "Hide comments";
  } else {
    commentsSection.classList.add("hidden");
    viewCommentsButton.textContent = "View comments";
  }
});

 



/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */

const mysteryText = document.querySelector("#mystery_text");
const displayMysteryText = document.querySelector("#display_mystery_text");

mysteryText.addEventListener("input", (event) => {
displayMysteryText.textContent = event.target.value;
});


/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

const form = document.querySelector("#handle_this_form");
const formResults = document.querySelector("#form_results");
const targetedInput = document.querySelector("#targeted_input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formResults.textContent = `No results for ${targetedInput.value} found.`;
});

/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */

const youMustAgree = document.querySelector("#you_must_agree");
const thanksForAgreeing = document.querySelector("#thanks_for_agreeing");
const termsAndConditions = document.querySelector("#terms");
const termsForm = document.querySelector("#terms_form");

termsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (termsAndConditions.checked) {
    thanksForAgreeing.classList.remove("hidden");
    termsAndConditions.classList.remove("is-invalid");
    youMustAgree.classList.add("hidden");
  } else {
    youMustAgree.classList.remove("hidden");
    termsAndConditions.classList.add("is-invalid");
    thanksForAgreeing.classList.add("hidden");
  }
});


/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

const groupOne = document.querySelectorAll('[data-group="1"]');
const groupTwo = document.querySelectorAll('[data-group="2"]');
const showGroupOne = document.querySelectorAll("#show_group_1");
const showGroupTwo = document.querySelectorAll("#show_group_2");

showGroupOne.forEach((button) => {
  button.addEventListener("click", () => {
    groupOne.forEach((groupItem) => {
      groupItem.classList.add("visible");
      groupItem.classList.remove("hidden");
    });
    groupTwo.forEach((groupItem) => {
      groupItem.classList.add("hidden");
      groupItem.classList.remove("visible");
    });
  });
});

showGroupTwo.forEach((button) => {
  button.addEventListener("click", () => {
    groupTwo.forEach((groupItem) => {
      groupItem.classList.add("visible");
      groupItem.classList.remove("hidden");
    });
    groupOne.forEach((groupItem) => {
      groupItem.classList.add("hidden");
      groupItem.classList.remove("visible");
    });
  });
});

})();