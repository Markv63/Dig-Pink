import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';

export class Roster {
  _id:  String;
  school: String;
  player: String;
  class: String;
  playerName: String;
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor(
    private digpinkDataservice: DigpinkDataService
  ) {}

  public rosters: Roster [];
  public message: string;

  ngOnInit(): void {
    this.getRosters()
  }
  /*public pageContent = {
    header: {
     title: 'Rosters',
     
   },
   content: ' Rosters for the schools'
   };*/

  private getRosters(): void {
    this.digpinkDataservice
      .getRosters()
      .then(foundRosters => {
        this.rosters = foundRosters;
    })
  }
  private showError(error: any): void {
    this.message = error.message;
  }  
}
