import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
//import { AppComponent} from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MemorialComponent } from './memorial/memorial.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
//import { SidebarComponent } from './sidebar/sidebar.component';

//console.log("app module ts display 1");

@NgModule({
  declarations: [
  //AppComponent,
  TournamentComponent,
  AboutComponent,
  RosterComponent,
  ScheduleComponent,
  MemorialComponent,
  FrameworkComponent,
  HomepageComponent,
  PageHeaderComponent
  //SidebarComponent
  
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [TournamentComponent]
  bootstrap: [FrameworkComponent]
  //
  
})

export class AppModule { }

 