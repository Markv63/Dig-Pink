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
  content: ' Dig Pink is the Side-Out Foundation fundraiser sponsored by the North Kansas City School District. The annual volleyball tournament is rotated between Staley, Winnetonka, Oak Park, and North Kansas City.\n The Side-Out Foundation is dedicated to changing the way that breast cancer is treated through a proactive and aggressive research agenda focused within the area of precision medicine for those living with stage IV breast cancer.'
};
}
