import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header: {
      title:  'North Kansas City School District Dig Pink Tournament Participants',
      strapline:  ''
      //strapline:  'NKC School District Side Out Foundation fund raiser'
    },
    sidebar: 'do we want this?'
  };
}