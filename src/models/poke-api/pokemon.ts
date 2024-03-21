import {PokemonType} from "./pokemon-type";

export interface Pokemon {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
  types: PokemonType[];
  // types: Array<PokemonType>;
}
