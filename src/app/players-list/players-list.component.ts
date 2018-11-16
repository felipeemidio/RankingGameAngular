import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {Player} from '../player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Observable<Player[]>;

  dataSource = new PlayerDataSource(this.rankingService);
  displayedColumns = ['name', 'victories', 'numberOfGames', 'deletar'];

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
  }

  getPlayers(){
    this.players = this.rankingService.getPlayersRanking();
  }

  onClickMe(playerId: number) {
    //this.value = "button clicked " + playerId;
    this.rankingService.deletePlayer(playerId);
  }

  AddGame(playerId: number){
    this.rankingService.AddGame(playerId);
  }

  AddVictory(playerId: number){
    this.rankingService.AddVictory(playerId);
  }
}

export class PlayerDataSource extends DataSource<any> {
  constructor(private rankingService: RankingService) {
    super();
  }
  connect(): Observable<Player[]> {
    return this.rankingService.getPlayersRanking();
  }
  disconnect() {}
}
