import {AfterViewInit, Component} from '@angular/core';
import {HttpClientService} from "../../../services/http-client-service";
import {HttpClientModule} from "@angular/common/http";
import {PokeApiResponse} from "../../../models/poke-api/poke-api-response";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {Pokemon} from "../../../models/poke-api/pokemon";
import {ApiResponse} from "../../../models/my-steam/api-response";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [HttpClientModule, NgForOf, TitleCasePipe, NgIf],
  providers: [HttpClientService],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements AfterViewInit {

  pokemons: Pokemon[] = [];
  pokeApiResponse: PokeApiResponse|undefined;

  constructor(private httpClientService: HttpClientService) {
  }

  ngAfterViewInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(url: string | null | undefined = 'https://pokeapi.co/api/v2/pokemon'): void {
    if (!url) return;
    this.pokemons = [];
    this.httpClientService.get<PokeApiResponse>(url).subscribe(
      (apiResponse) => {
        this.pokeApiResponse = apiResponse;
        for (const result of apiResponse.results) {
          this.httpClientService.get<Pokemon>(result.url).subscribe((pokemon) => {
            this.pokemons.push(pokemon);
          });
        }
      }
    );
  }

}
