console.log("participant.component.ts display 1");

import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';


export class Participant {
  _id:  String;
  school: String;
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(  
    private digpinkDataservice: DigpinkDataService
  ) {}   
   
  school = 'Staley'
  public participants: Participant [];

  ngOnInit() {
    this.getParticipants();
  }

  private getParticipants(): void {
    this.digpinkDataservice
      .getParticpants()
      .then(foundParticipants => {
        this.participants = foundParticipants;
      //.then(foundParticipants => this.particapants = foundParticipants);
    });
  }

}




