import { Component, OnInit } from '@angular/core';
import { DigpinkDataService } from '../digpink-data.service';


console.log("memorial.component.ts display 1");

export class Memorial {
  //_id: number;
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
    
  public newMemorial:  Memorial = {
    honor:  '',
    player: '',
    school: ''
  };
  public  formVisible: boolean = false
  public  formError:   string;

  constructor(private digpinkDataservice: DigpinkDataService) {} 
 
  public memorials: Memorial[];  
  public message: string;
  
  ngOnInit() {
   this.getMemorials();
  }
  
  private formIsValid(): boolean {
    if (this.newMemorial.honor && this.newMemorial.player && this.newMemorial.school) {
      return true;
    } else {
      return false;
    }
  }
  
  public onMemorialSubmit(): void {
    this.formError = '';
    if(this.formIsValid()) {
    this.digpinkDataservice.addMemorial(this.newMemorial)
    .then((memorial:  Memorial) => {
    let memorials = this.memorials;
    memorials.unshift(memorial);
    this.memorials = memorials;
    this.resetAndHideMemorialForm();
    console.log("mem comp on submit");
    })
  } else {
    this.formError = 'All fields required, please try again';
    }
  }

  private resetAndHideMemorialForm(): void {
    this.formVisible = false;
    this.newMemorial.honor = '';
    this.newMemorial.player = '';
    this.newMemorial.school = ''; 
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
  
 
