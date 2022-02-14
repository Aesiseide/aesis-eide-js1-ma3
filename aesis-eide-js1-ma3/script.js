// Question 1
const getRemainder = (a,b) =>  return a % b;

// Question 2
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=05220d87e9204a108c5c645b089d2af8";

const resultsContainer = document.querySelector(".result");

async function getCats() {
  const response = await fetch(url);
  const all = await response.json();
  const games = all.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    resultsContainer.innerHTML +=
      '<div class="result">' + games[i].name + "</div>";

    resultsContainer.innerHTML +=
      '<div class="result">' + games[i].rating + "</div>";

    resultsContainer.innerHTML +=
      '<div class="result">' + games[i].tags.length + "</div>";

    if (i === 8) {
      break;
    }
  }
}

getCats();
