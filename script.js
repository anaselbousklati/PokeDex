fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
  .then(res => {
    return res.json();
  })
  .then(data => {
    displayPokemon(data.results);
  })
  .catch(error => console.log(error));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  dark: "#EE99AC",
};

async function displayPokemon(pokemonList) {
  const pokecards = document.getElementById('pokecards');

  pokemonList.forEach(async (pokemon) => {
    const pokemonData = await getPokemonData(pokemon.url);

    const card = document.createElement('div');
    card.className = 'card';

    const cardBorderColor = typeColors[pokemonData.types[0].type.name];
    card.style.border = `3px solid ${cardBorderColor}`;
    card.style.borderRadius = '15px';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = `${capitalizeFirstLetter(pokemonData.name)}`;

    const cardImage = document.createElement('img');
    cardImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`;
    cardImage.width = 100;
    cardImage.height = 100;
    cardImage.alt = pokemonData.name;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const statsButton = createButton('Stats', 'btn btn-warning', () => {
      navigateToDetailsPage(pokemonData.id);
    });

    cardBody.appendChild(cardImage);
    cardBody.appendChild(buttonContainer);
    buttonContainer.appendChild(statsButton);

    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    pokecards.appendChild(card);
  });
}

async function getPokemonData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function searchPokemon(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();
  fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(res => res.json())
    .then(pokemonList => {
      const matchingPokemon = pokemonList.results.filter(pokemon => {
        return (
          pokemon.name.startsWith(searchTerm) ||
          pokemon.url.endsWith(`/${searchTerm}`) ||
          (parseInt(searchTerm) && parseInt(searchTerm) === parseInt(pokemon.url.split('/').reverse()[1]))
        );
      });

      if (matchingPokemon.length > 0) {
        const pokemonDetailsPromises = matchingPokemon.map(pokemon => {
          return fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
              if (data && data.name) {
                return data;
              }
            })
            .catch(error => console.log(error));
        });

        Promise.all(pokemonDetailsPromises)
          .then(pokemonDetails => {
            pokemonDetails.forEach(displaySearchedPokemon);
          })
          .catch(error => console.log(error));
      } else {
        alert('Er zijn geen matches gevonden');
      }
    })
    .catch(error => console.log(error));

  searchInput.value = '';
}



function displaySearchedPokemon(pokemonData) {
  const pokecards = document.getElementById('pokecards');
  pokecards.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardBorderColor = typeColors[pokemonData.types[0].type.name];
  card.style.border = `3px solid ${cardBorderColor}`;
  card.style.borderRadius = '15px';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = `#${pokemonData.id} - ${capitalizeFirstLetter(pokemonData.name)}`;

  const cardImage = document.createElement('img');
  cardImage.src = pokemonData.sprites.front_default;
  cardImage.alt = pokemonData.name;

  const buttonContainer = document.createElement('div');

  const grassButton = createButton('Stats', 'btn btn-warning', () => {
    navigateToDetailsPage(pokemonData.id);
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardImage);
  cardBody.appendChild(buttonContainer);
  buttonContainer.appendChild(grassButton);

  card.appendChild(cardBody);
  pokecards.appendChild(card);
}

function createButton(text, className, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = className;
  button.addEventListener('click', onClick);
  return button;
}

function navigateToDetailsPage(id) {
  window.location.href = `details.html?id=${id}`;
}

function change1() {
  document.getElementById("sc").style.background = "url(assets/bg-1.png) center center / cover";
}
function change2() {
  document.getElementById("sc").style.background = "url(assets/bg-2.png) center center / cover";
}
function change3() {
  document.getElementById("sc").style.background = "url(assets/bg-3.png) center center / cover";
}
function change4() {
  document.getElementById("sc").style.background = "url(assets/bg-4.png) center center / cover";
}
