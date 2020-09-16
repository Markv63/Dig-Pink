import { Component, OnInit, Input } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';

console.log("tourn component ts display 1")

export class Tournament {
  time:     String;
  team:     String;
  home:     String;
  opponent: String;
  visitor:  String;
  gym:      String;
}

console.log("tournament.component.ts display 1");

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']  
})

export class TournamentComponent implements OnInit {

  newTournament:  Tournament = {
    time:  '',
    team: '',
    home: 'Home',
    opponent: '',
    visitor: 'Visitor',
    gym:  ''
  };
  
  constructor(
    private digpinkDataService: DigpinkDataService 
  ){}

  public tournaments: Tournament[];
  public message:  string;

  ngOnInit() {
   this.getTournaments();
    }


private getTournaments(): void {
  this.digpinkDataService
    .getTournaments()
    .then(foundTournaments => 
      {this.tournaments = foundTournaments;
    });
  }
  private showError(error: any): void {
    this.message = error.message;
  };
} 
