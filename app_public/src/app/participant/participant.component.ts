import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';


export class Participant {
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
   
  
  public participants: Participant [];
  public message: string;
  
  ngOnInit() {
    this.getParticipants();
  }

  private getParticipants(): void {
    this.digpinkDataservice
      .getParticpants()
      .then(foundParticipants => {
        this.participants = foundParticipants;
      
    });
  }
  private showError(error: any): void {
    this.message = error.message;
  } 
}




