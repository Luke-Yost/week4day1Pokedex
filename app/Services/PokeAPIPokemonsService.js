import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";



class PokeAPIPokemonsService{
  async getPokeAPIPokemons(){
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log('getting the mons', res.data);
  }
}

export const pokeAPIPokemonsService = new PokeAPIPokemonsService()