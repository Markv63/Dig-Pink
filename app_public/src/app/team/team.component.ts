import { Component, OnInit, Input } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';
import { Roster } from '../roster/roster.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  @Input() roster: Roster;
  
  constructor() { }

  ngOnInit(): void {
  }

}
