document.addEventListener('DOMContentLoaded', function () {

    const params = new URLSearchParams(window.location.search);
    const pokemonName = params.get('name');

    if (pokemonName) {
        fetchPokemonDetails(pokemonName);
    } else {
        console.error('Pokemon name not provided in the URL.');
    }
});

function fetchPokemonDetails(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => displayPokemonDetails(data))
        .catch(error => console.error(error));
}

function displayPokemonDetails(pokemonData) {
    const pokemonDetailsContainer = document.getElementById('pokemonDetails');

    const nameElement = document.createElement('h2');
    nameElement.textContent = `#${pokemonData.id} - ${capitalizeFirstLetter(pokemonData.name)}`;
    pokemonDetailsContainer.appendChild(nameElement);

    const spriteElement = document.createElement('img');
    spriteElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`;
    spriteElement.alt = `${capitalizeFirstLetter(pokemonData.name)} Sprite`;
    spriteElement.width = 300;
    spriteElement.height = 300;
    pokemonDetailsContainer.appendChild(spriteElement);

    const baseExperienceElement = document.createElement('p');
    baseExperienceElement.textContent = `Base Experience: ${pokemonData.base_experience}`;
    pokemonDetailsContainer.appendChild(baseExperienceElement);

    const heightElement = document.createElement('p');
    heightElement.textContent = `Height: ${pokemonData.height} decimetres`;
    pokemonDetailsContainer.appendChild(heightElement);

    createTable(pokemonData.abilities, 'Abilities', ['Ability']);
    createTable(pokemonData.held_items, 'Held Items', ['Item']);
    createTable(pokemonData.game_indices, 'Game Indices', ['Version']);

    function createTable(data, tableName, headers) {
        if (data.length > 0) {
            const tableElement = document.createElement('table');
            tableElement.classList.add('table', 'table-bordered', 'mt-3');

            const theadElement = document.createElement('thead');
            const headerRow = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });
            theadElement.appendChild(headerRow);
            tableElement.appendChild(theadElement);

            const tbodyElement = document.createElement('tbody');
            data.forEach(item => {
                const tr = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = item[header.toLowerCase()].name;
                    tr.appendChild(td);
                });
                tbodyElement.appendChild(tr);
            });
            tableElement.appendChild(tbodyElement);

            const tableTitle = document.createElement('p');
            tableTitle.textContent = `${tableName}:`;
            pokemonDetailsContainer.appendChild(tableTitle);
            pokemonDetailsContainer.appendChild(tableElement);
        }
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
