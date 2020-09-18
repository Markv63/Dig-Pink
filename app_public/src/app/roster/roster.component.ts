import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';
//import { Homepage } from '../homepage/homepage.component';
import { RosterList } from '../RosterList';

export class Roster {
  school:       String;
  teamName:     String;
  player:       String;
  class:        String;
  playerNumber: String;
}


/*export class Team {
  teamName: String;
  player: String;
  class: String;
  playerNumber: String;
}

export class Roster {
  _id:  String;
  school: String;
  teams: Team[];
 
}*/

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

 newRoster:  Roster = {
   school:      '',
   teamName:    '',
   player:      '',
   class:       '',
   playerNumber:''
 }; 
  
 
   
  constructor(
    private digpinkDataservice: DigpinkDataService
  ) {}

  public rosters: Roster [];
  public teams:  Roster[];
  public message: string;

  ngOnInit(): void {
    this.getRosters()
    
  }

  /*private getTeams(): void {
    this.digpinkDataservice
      .getTeams()
      .then(foundTeams => {
      //  this.teams = foundTeams;
    })
  }*/
    
  private getRosters(): void {
    this.digpinkDataservice
      .getRosters()
      .then(foundRosters => {
        this.rosters = foundRosters;
    })
  }

  public pageContent = {
    header: {
      title: 'North Kansas City School District Dig Pink Tournament',
      
    },
      strapline:  'NKC School District Side Out Foundation fund raiser',
      sidebar: 'Picture from last year',
      content: 'Dig Pink is an annual fundraising event sponsored by the NKC School District volleyball teams'
    };

  //private showError(error: any): void {
  //  this.message = error.message;
  //}  
}
