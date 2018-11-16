import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';
import { NgForm } from '@angular/forms';
import { Player } from '../player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  model = new Player(null, "", 0, 0);
  result = "";

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return this.result; }

  // Submit the form's content.
  onSubmit(form: NgForm){
    if(this.model.numberOfGames < this.model.victories)
    {
      this.result = "Número de Patidas tem que ser menor que o de vitórias";
    }
    else{
      this.result = "Jogador Cadastrado";
      this.rankingService.registerPlayer(this.model);
      form.reset();
      
    }
    
  }


}
