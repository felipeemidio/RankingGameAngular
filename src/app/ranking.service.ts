import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { Player } from './player';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  rankingUrl = 'http://localhost:8080/players';

  constructor(private http: HttpClient, private router: Router ) { }

  getPlayersRanking(){
    return this.http.get<any[]>(`${this.rankingUrl}`);
  }

  deletePlayer(playerId: number){
    this.http.delete(`${this.rankingUrl}/${playerId}`).subscribe();
  }

  registerPlayer(player: Player){
    this.http.post(`${this.rankingUrl}`, player, httpOptions).subscribe();
    this.router.navigate(['/playerForm']);
  }

  AddGame(playerCod: number){
    return this.http.put(`${this.rankingUrl}/addGame/${playerCod}`, null).subscribe();
  }

  AddVictory(playerCod: number){
    return this.http.put(`${this.rankingUrl}/addVictory/${playerCod}`, null).subscribe();
  }
}
