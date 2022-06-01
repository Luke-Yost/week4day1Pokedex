import { PokeAPIPokemonsController } from "./Controllers/PokeAPIPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokeAPIPokemonsController = new PokeAPIPokemonsController();

}

window["app"] = new App();
