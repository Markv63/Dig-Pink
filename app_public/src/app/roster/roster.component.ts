import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';
import { Participant } from '../participant/participant.component';
import { RosterList } from '../RosterList';


export class Team {
  teamName: String;
  player: String;
  class: String;
  playerNumber: String;
}

export class Roster {
  _id:  String;
  school: String;
  teams: Team[];
 
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  newRoster:  RosterList; 
  
  /*const rostersCreate = (req, res) => {
    Loc.create({
       school:        req.body.school,
       Team: [
         {
         teamName:      req.body.teamName,
         player:        req.body.player,
         class:         req.body.class,
         playerNumber:  req.body.playerNumber
         }]
       }, (err, roster) => {
       if (err) {
         res
           .status(400)
           .json(err);
      
       } else {
         res
           .status(201)
           .json(roster);
       }  
     });
   } */
    
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


  //private showError(error: any): void {
  //  this.message = error.message;
  //}  
}
