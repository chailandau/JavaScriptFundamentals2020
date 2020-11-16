/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */

axios({
  url: "https://rickandmortyapi.com/api/character/",
  method: "GET",
})
  .then((response) => {
    let characterList = response.data.results;
    let dropdown = document.querySelector("#dropdown");
    let image = document.querySelector("#get-schwifty");
    let title = document.querySelector("#title-head");

    characterList.forEach((character) => {
      let newOption = document.createElement("option");
      newOption.textContent = character.name;
      newOption.value = character.id;
      dropdown.appendChild(newOption);
    });

    dropdown.addEventListener("change", (event) => {
      if (event.target.value === "initial") {
        image.src = "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg";
        title.textContent = "Rick and his homies, gettin' schwifty.";
      } else {
        let currentCharacter = characterList[event.target.value - 1];
        image.src = currentCharacter.image;
        title.textContent = currentCharacter.name;
      }
    });
  }) // success+

  .catch(() => console.log("error")); // failure
