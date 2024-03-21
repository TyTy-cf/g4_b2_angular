import {ResultContent} from "./result-content";

export interface PokeApiResponse {
  next: string|null;
  previous: string|null;
  results: ResultContent[];
}
