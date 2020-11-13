(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */



let randomDogPic = () => {
  return fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET"
  }).then(response => response.json())
  .then((response) => {
    const randomDogImg = response.message;
    const dogImg = document.querySelector("#image");
    dogImg.src=randomDogImg;
  })
  .catch(() => {
    window.alert("Error!");
  });
};

const button = document.querySelector("#random_dog_button");

button.addEventListener("click", () => {
  randomDogPic();
});

})();

