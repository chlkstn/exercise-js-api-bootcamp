//excercise 1//

/*const pokeUrl = "https://santosnr6.github.io/Data/pokemons.json";

async function fetchPokemonData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("We got the fetch");
    }

    const data = await response.json();

    const listContainer = document.getElementById("pokemons");

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      let pokemonitem = document.createElement("li");
      pokemonitem.textContent = data[i].name;
      listContainer.appendChild(pokemonitem);
    }
  } catch (error) {}
}*/

/*const dogUrl = "https://majazocom.github.io/Data/dogs.json";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    const dogContainer = document.getElementById("dogs");

    for (let i = 0; i < json.length; i++) {
      console.log(json[i]);
      let dogitem = document.createElement("li");
      dogitem.textContent = json[i].name;
      dogContainer.appendChild(dogitem);
    }
  } catch (error) {
    console.error(error.message);
  }
}

const BookUrl = "https://majazocom.github.io/Data/books.json";

async function getBooks(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    let bookContainer = document.getElementById("books");

    for (let i = 0; i < json.length; i++) {
      if (json[i].pages < 500) {
        let bookitem = document.createElement("li");
        bookitem.textContent = json[i].title;
        bookContainer.appendChild(bookitem);

        console.log("smallbook");
      }
    }

    console.log(`${json[1].pages}`);
  } catch (error) {
    console.error(error.message);
  }
}

const visitorUrl = "https://majazocom.github.io/Data/attendees.json";

async function getVisitors(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    let visitorContainer = document.getElementById("visitors");
    for (let i = 0; i < json.length; i++) {
      if (json[i].attending == true && json[i].allergies.length > 0) {
        console.log("test");
        let visitoritem = document.createElement("li");
        visitoritem.textContent = json[i].name;
        visitorContainer.appendChild(visitoritem);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}*/


