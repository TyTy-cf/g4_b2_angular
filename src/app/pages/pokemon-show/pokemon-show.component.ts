import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HttpClientService} from "../../../services/http-client-service";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {Pokemon} from "../../../models/poke-api/pokemon";

@Component({
  selector: 'app-pokemon-show',
  standalone: true,
  imports: [HttpClientModule, NgForOf, TitleCasePipe, NgIf, RouterLink, UpperCasePipe],
  providers: [HttpClientService],
  templateUrl: './pokemon-show.component.html',
  styleUrl: './pokemon-show.component.scss'
})
export class PokemonShowComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClientService: HttpClientService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClientService.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + params['name']).subscribe(
        (pokemon) => {
          this.pokemon = pokemon;
        }
      );
    });
  }

}
