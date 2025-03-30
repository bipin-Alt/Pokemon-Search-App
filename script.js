const showPokemonImg = document.querySelector(".pokemon-img");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonType = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpeed = document.getElementById("speed");

const fetchPika = async () => {
  setTimeout(()=>{
    if(loader.style.display="none"){
      loader.style.display ="block";
    };
  },0);
  setTimeout(()=>{
    if(loader.style.display="block"){
      loader.style.display="none";
    };
  },2000);
  try{
    const searchPokemonName = searchInput.value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchPokemonName}`);
    const data = await response.json();
    console.log(data);
    pokemonName.textContent =`${data.name.toUpperCase()}`;
    pokemonId.textContent =`${data.id}`;
    pokemonWeight.textContent=`${data.weight}`
    pokemonHeight.textContent=`${data.height}`;
    showPokemonImg.innerHTML = `
    <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;

    //set stats //
    pokemonHp.textContent= data.stats[0].base_stat;
    pokemonAttack.textContent = data.stats[1].base_stat;
    pokemonDefense.textContent=data.stats[2].base_stat;
    pokemonSpecialAttack.textContent= data.stats[3].base_stat;
    pokemonSpecialDefense.textContent = data.stats[4].base_stat;
    pokemonSpeed.textContent = data.stats[5].base_stat;
    //set type 
    pokemonType.innerHTML = data.types.map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join("");
  }catch(err){
     resetStats();
     alert("Pokemon not Found");
     console.log(`Pokemon not found due to: ${err}`);
  }
};
const resetStats = ()=>{
    searchInput.textContent="";
    pokemonName.textContent="";
    pokemonId.textContent="";
    pokemonHeight.textContent="";
    pokemonAttack.textContent="";
    pokemonDefense.textContent="";
    pokemonHp.textContent="";
    pokemonType.textContent="";
    pokemonSpecialAttack.textContent="";
    pokemonSpeed.textContent="";
    pokemonSpecialDefense.textContent="";
    pokemonWeight.textContent="";
    
}


searchBtn.addEventListener("click", fetchPika);
