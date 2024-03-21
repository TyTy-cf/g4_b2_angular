import {PokemonType} from "./pokemon-type";
import {Stats} from "./stats";

export interface Pokemon {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      }
    }
  }
  types: PokemonType[];
  stats: Stats[];
  // types: Array<PokemonType>;
}
