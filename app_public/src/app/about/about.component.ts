import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public pageContent = {
  header: {
    title: 'About Dig Pink',
    
  },
  content: ' Dig Pink is the Side Out Foundation fund raiser sponsered by the North Kansas City School District. The annual volleyball tournament is rotated between Staley, Winnetonka, Oak Park, and North Kansas City.'
  };
}
