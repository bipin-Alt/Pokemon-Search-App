const searchBtn = document.getElementById("search-button");

const fetchPokemon = async ()=>{
   try{
    const pokemonNameOrId = document.getElementById("search-input").value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
    const data = await response.json();
    console.log(data);
     
    //set pokemon stats//
    const tableForStats = document.querySelector(".pokemon-stats");
    const pokemonImageContainer = document.querySelector(".pokemon-img")
    pokemonImageContainer.innerHTML =`
    <img id="image" src="${data.sprites.font_default}" alt="${data.name}">`;
    tableForStats.innerHTML =`
    <tr>
        <th>Base</th>
        <th>Stats</th>
    </tr>
    <tr>
    <tb>Name </tb>  
    <tb id ="pokemon-name">${data.name.toUpperCase()}</tb>   
    </tr>
    <tr>
    <tb>Id </tb>
    <tb id="pokemon-id">${data.id}</tb>
    </tr>
    <tr>
    <tb>Weight </tb>
    <tb id="weight">${data.weight}</tb>
    </tr>
    <tr>
    <tb>Height</tb>
    <tb id ="height">${data.height}</tb>
    </tr>
    <tr>
    <tb>Types</tb>
    <tb id="types">${data.types.map(obj =>`<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('')}</tb>
    </tr>
    <tr>
    <tb>HP</tb>
    <tb id="hp">${data.stats[0].base_stat}</tb>
    </tr>
    <tr>
    <tb>Attack</tb>
    <tb id="attack">${data.stats[1].base_stat}</tb>
    </tr>
    <tr>
    <tb>Defense</tb>
    <tb id="defense">${data.stats[2].base_stat}</tb>
    </tr>
    <tr>
    <tb>Special-attack</tb>
    <tb id="special-attack">${data.stats[3].base_stat}</tb>
    </tr>
    <tr>
    <tb>Special-defense</tb>
    <tb id="special-defense">${data.stats[4].base_stat}</tb>
    </tr>  
    <tr>
    <tb>Speed</tb>
    <tb id="speed">${data.stats[5].base_stat}</tb>
    </tr>`;
   } catch(err){
     alert("Pokemon Not Found!!!");
     console.log(`Failed to get Pokemon due to: ${err}`);
   }
};

//addEventListener to the search Button//
searchBtn.addEventListener("click",fetchPokemon());

