import { Component, OnInit } from '@angular/core';
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
    
  constructor(  
    private digpinkDataservice: DigpinkDataService
  ) {} 
 
  public memorials: Memorial[];  
  public message: string;
  
  ngOnInit() {
   this.getMemorials();
  }
  
  
  private getMemorials(): void {
    this.digpinkDataservice
      .getMemorials()
      .then(foundMemorials => {
        this.memorials = foundMemorials;
 
    });
  }

  private showError(error: any): void {
    this.message = error.message;
  } 
}
  
  /*
  public pageContent = {
    header: {
      title: 'Honors and Memorials for individuals affected by breast cancer',
    },
      content: 'staley ts',
    };*/

  

  //public formVisible: boolean = false;
  //public formError: string;
  

 
 
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



/*public pageContent = {
  header: {
    title: 'About Dig Pink',
    
  },
  content: ' Dig Pink is the Side Out Foundation fund raiser sponsered by the North Kansas City School District. The annual volleyball tournament is rotated between Staley, Winnetonka, Oak Park, and North Kansas City.'
  };
}*/
