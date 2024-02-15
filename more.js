function showCharacterInfo(characterId) {
    const characterInfo = {
        'character1': {
            text: "Ash Ketchum is a 10-year old boy, who's ultimate goal is to become a Pokémon Master, the greatest Pokémon Trainer ever Pikachu is the only Pokémon he travels with him to every region he goes to in his journey. He is also the Alola Region’s Pokémon Champion receiving that title after winning its first Pokémon League Conference and he is also the World Champion, referred to as 'Monarch', Meaning he is the Strongest Pokémon Trainer in the Pokémon World, after beating the previous Monarch Leon in the World Coronation Series’ Master’s Eight Tournament.",
            image: 'assets/Ash_JN.png',
        },
        'character2': {
            text: "Pikachu is an Electric-type Pokémon owned by Ash Ketchum. He is Ash's first Pokémon and best friend. Also, Pikachu always stays outside his Poké Ball.",
            image: 'assets/pikachu.svg',
        },
        'character3': {
            text: "Goh is a 10-year-old rookie Pokémon Trainer and a research assistant at the Cerise Laboratory, working alongside Ash. Goh's goal is to catch every Pokémon in every region, in the hopes of accomplishing his dream of catching Mew.",
            image: 'assets/Goh_JN.png',
        },
        'character4': {
            text: "Scorbunny is a fire-type Pokemon. Taking a liking to Goh, Scorbunny subsequently started following him.",
            image: 'assets/scorbunny.png',
        },
        'character5': {
            text: "Professor Cerise is a calm but friendly person. He is very knowledgeable about Pokémon, being deemed a genius since he was young. He researchs on pokemons at Cerise Labratory while supporting Ash and Goh's adventures.",
            image: 'assets/professor.png',
        },
        'character6': {
            text: "Chloe is the daughter of Professor Cerise and a childhood friend of Goh. she became a Pokemon trainer.",
            image: 'assets/chloe.png',
        },
        'character7': {
            text: "Yamper is an Electric-type Pokémon owned by the pet of the Cerise household. Out of the Cerise household, Yamper likes Chloe the most.",
            image: 'assets/yamper.png',
        },
        'character8': {
            text: "A trio of Team Rocket field agents, Jessie, James, and a talking Meowth, were defeated on an assignment to steal Pokémon from Viridian City's Pokémon Center by rookie Trainer Ash Ketchum and his Pikachu, and since then have followed him everywhere on his journey in order to steal the Pikachu that humiliated them. ",
            image: 'assets/team-rocket.png',
        },
    };
                                                                               
    const infoContainer = document.getElementById('characterInfo');

    infoContainer.innerHTML = `
        <img src="${characterInfo[characterId].image}" alt="${characterId}">
        <p>${characterInfo[characterId].text}</p>
    `;
}

document.querySelectorAll('.d-flex a').forEach(function (link) {
    link.addEventListener('click', function () {
        const characterId = link.dataset.id;
        showCharacterInfo(characterId);
    });
});

const imageelement = document.getElementById("characterInfo");

document.querySelectorAll('.d-flex a').forEach(function (link) {
    link.addEventListener('click', function () {
        const characterId = link.dataset.id;
        showCharacterInfo(characterId);
    });
});

showCharacterInfo('character2');