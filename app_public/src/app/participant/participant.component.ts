import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';
import { Roster } from '../roster/roster.component';

console.log("participant.component.ts display 1");

export class Participant {
  school: string;
  roster: Roster[];
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(  
    private digpinkDataservice: DigpinkDataService
  ){}   
   
  
  public participants: Participant[];
  public message: string;
  
  ngOnInit() {
    this.getParticipants();
  }

  private getParticipants(): void {
    this.digpinkDataservice
      .getParticpants()
      .then(foundParticipants => {
        this.participants = foundParticipants;
    console.log(this.getParticipants);  
    });
  }
  private showError(error: any): void {
    this.message = error.message;
  } 
}




