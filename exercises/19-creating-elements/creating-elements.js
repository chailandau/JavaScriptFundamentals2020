(function () {

const clickMe = document.querySelector("#click_me");
const madeYaClick = document.querySelector("#made_ya_click");

clickMe.addEventListener("click", () => {
  madeYaClick.classList.toggle("clicked");
  if(!madeYaClick.classList.contains("clicked")) {
    const alert = document.querySelector(".alert-warning");
    alert.remove();
    clickMe.textContent = "Click me!";
} else {
  const alert = document.createElement("div");
  alert.textContent = "Made ya click!";
  alert.classList.add("alert", "alert-warning");
  madeYaClick.appendChild(alert);
  clickMe.textContent = "Delete me!";
}
});

})();