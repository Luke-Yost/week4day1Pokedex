import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPIPokemonsService } from "../Services/PokeAPIPokemonsService.js";


// function _drawPokemon
export class PokeAPIPokemonsController{
  constructor(){
    console.log('load the mons');
    this.getPokeAPIPokemons()
  }

  async getPokeAPIPokemons(){
    try{
      await pokeAPIPokemonsService.getPokeAPIPokemons()
    }
    catch(error){
      console.log('error');
    }
  }

  // async getPokeAPIpokemon(){
  //   try {

  //   }
  //   catch(error){
      
  //   }
  // }

}