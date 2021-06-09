const poke_container = document.getElementById('poke_container') ; 
let pokemons_number = 150 ; 
var min= 1 ; 
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };

const main_types = Object.keys(colors) ; 



//recherche
function findPoke() {
    var input = document.getElementById("find").value;
    document.getElementById('poke_container').innerHTML = "";
    getPokemon(input) ; 
}
//base 
const fetchPokemons = async() => { 
    for (min ;min<= pokemons_number ; min++){
        await getPokemon(min) ; 
    }
}
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}` ; //appel de l'api pokeaAPI
    const res = await fetch(url) ; 
    const pokemon = await res.json();
    createPokemonsCard(pokemon) ; 
}

function getValue() {
    var max = document.getElementById("max").value;
     min = document.getElementById("min").value;
    document.getElementById('poke_container').innerHTML = "";
    pokemons_number = max; 
   fetchPokemons() ; 
}

function createPokemonsCard(pokemon){
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    //type
    const poke_types = pokemon.types.map(element => element.type.name) ; 
    const type = main_types.find(type =>poke_types.indexOf(type) > -1 ); 
    const secondary_type = main_types.find(type =>poke_types.indexOf(type) > 0 ); ; 
    let essaie ; 
  
    if (secondary_type === undefined || secondary_type == type  ) {
       essaie = type ; 
    }
    else { 
         essaie = type+ (', ') + secondary_type; 
    } 


    //nom 
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colors[type] ; 
    pokemonEl.style.backgroundColor = color ; 
    //vue
    const pokeInnerHTML = `
    <div class="img-container" onclick="carte(${pokemon.id})" id =" ${pokemon.id}">

        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" /> 
     </div>
     <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
        <h3 class="name"> ${name} </h3>
        <small class="type">Type : <span> ${essaie} </span> </small>
     </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML ; 
    poke_container.appendChild(pokemonEl); 
}

function carte (id_transmis) {
   var card =  document.getElementById(id_transmis); 
   car.style.marginLeft="5em";
}

fetchPokemons() ; 
