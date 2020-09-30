import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DigpinkDataService } from '../digpink-data.service';
import { Participant } from '../participant/participant.component';
//import { Homepage } from '../homepage/homepage.component';
import { RosterList } from '../RosterList';
import { switchMap } from 'rxjs/operators';
 
console.log(" roster component 1");


export class Roster {
  teamName:     String;
  player:       String;
  playerClass:  String;
  playerNumber: String;
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  @Input() participant: Participant;
 // @Input() teams: Roster[];

 constructor(
    private digpinkDataservice: DigpinkDataService,
    private route: ActivatedRoute
  ) {}

  //public participant:  Participant; 
  public extraParticipant: Participant;

  public newRoster: Roster;
  public teams:  Roster[];
  public message: string;
   

  ngOnInit() {
    this.callService();
  }
  public callService(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('participantId');
        console.log("participantId", id);
        console.log("in switchmap");
       //return this.digpinkDataservice.getRosters(id);
        return this.digpinkDataservice.rostersReadOne(id);
       // return this.digpinkDataservice.getParticipantsReadOne(id);
      })
    ).subscribe(( participant : Participant) => {
      console.log("in subscribe method",participant);
      this.teams = participant.roster;
      console.log("roster info", this.teams);
      console.log("teamname",this.teams[0].teamName);
      });
    }
 

  /*public pageContent = {
    header: {
      title: 'North Kansas City School District Dig Pink Tournament',
      
    },
      strapline:  'NKC School District Side Out Foundation fund raiser',
      sidebar: 'Picture from last year',
      content: 'Dig Pink is an annual fundraising event sponsored by the NKC School District volleyball teams'
    };*/

  //private showError(error: any): void {
  //  this.message = error.message;
  //}  
}
