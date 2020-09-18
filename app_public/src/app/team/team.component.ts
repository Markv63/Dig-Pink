import { Component, OnInit, Input } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';
 

export class Team {
  teamName: String;
  player: String;
  class: String;
  playerNumber: String;
}

/*export class Roster {
  _id:  String;
  school: String;
  teams: Team[];
}*/

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  constructor(
    private digpinkDataservice: DigpinkDataService
  ) { }
  
  public teams: Team [];
  public message: string;

  ngOnInit(): void {
    this.getTeams()
  }
  
  private getTeams(): void {
    this.digpinkDataservice
      .getTeams()
      .then(foundTeams => {
        this.teams = foundTeams;
    })
  }
  public pageContent = {
    header: {
      title: 'North Kansas City School District Dig Pink Tournament',
      
    },
      //strapline:  'NKC School District Side Out Foundation fund raiser',
      sidebar: 'Picture from last year'
      //content: 'Dig Pink is an annual fundraising event sponsored by the NKC School District volleyball teams'
    }  
  private showError(error: any): void {
    this.message = error.message;
  }
}  

