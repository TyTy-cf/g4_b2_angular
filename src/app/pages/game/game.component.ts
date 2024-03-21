import {AfterViewInit, Component} from '@angular/core';
import {HttpClientService} from "../../../services/http-client-service";
import {ApiResponse} from "../../../models/my-steam/api-response";
import {Game} from "../../../models/my-steam/game";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [HttpClientModule, NgForOf, NgIf],
  providers: [HttpClientService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements AfterViewInit
{

  items: Game[] = [];

  constructor(private httpClientService: HttpClientService) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.httpClientService.get<ApiResponse<Game>>('https://steam-ish.test-02.drosalys.net/api/game')
        .subscribe((datas) => {
          this.items = datas.items;
        });
    }, 1000);
  }

}
