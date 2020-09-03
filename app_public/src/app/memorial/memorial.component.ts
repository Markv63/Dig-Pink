import { Component, OnInit, Input } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';

console.log("memorial.component.ts display 1");

export class Memorial {
  honor: String;
  player: String;
  school: String;
}

@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css']
})
export class MemorialComponent implements OnInit {
  @Input() memorial:  Memorial;

  public newMemorial:  Memorial = {
    honor: '',
    player: '',
    school: ''
  };

  public formVisible: boolean = false;
  public formError: string;

  
  constructor(  
    private digpinkDataservice: DigpinkDataService
  ) {} 

  public memorials: Memorial [];  

  ngOnInit() {
    //this.getMemorials();
  }
 
/*
  private formIsValid: boolean {
    if (this.newMemorial.honor && this.newMemorial.player && this.newMemorial.school) {
      return true;
    } else {
      return false;
    }
  }

  private onMemorialSubmit(): void {
    this.formError ='';
    if (this.formIsValid()) {
      this.digpinkDataService.addMemorial(this.newMemorial)
      .then((memorial: Memorial) => {
      let memorials = this.memorial.slice(0);
      this.memorial = memorials;
      this.resetAndHideMemorialForm();
    })
  } else {
    this.formError = 'All fields requiired, please try again';
    }
  }
    
  private resetAndHideMemorialForm(): void {
    this.formVisible = false;
    this.newMemorial.honor = '';
    this.newMemorial.player = '';
    this.newMemorial.school = '';
  }*/

  private getMemorials(): void {
    this.digpinkDataservice
      .getMemorials()
      .then(foundMemorials => {
        this.memorials = foundMemorials;
      //.then(foundParticipants => this.particapants = foundParticipants);
    });
  }

  public pageContent = {
  header: {
    title: 'Honors and Memorials for individuals affected by breast cancer',
  },
    content: '',
  };
}

