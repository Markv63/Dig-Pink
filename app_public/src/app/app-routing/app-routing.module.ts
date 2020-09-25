import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }       from '../about/about.component';
import { HomepageComponent }    from '../homepage/homepage.component';
import { MemorialComponent }    from '../memorial/memorial.component';
import { ParticipantComponent } from '../participant/participant.component';
import { RosterComponent }      from '../roster/roster.component';
import { TeamComponent }        from '../team/team.component';
import { TournamentComponent }  from '../tournament/tournament.component';

console.log("app-routing.component.ts display 1");
// non impact change
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'memorial',
    component: MemorialComponent
  },
  {
    path: 'participant',
    component: ParticipantComponent
    },
  {
    path: 'tournament',
    component: TournamentComponent
  },
  {
    //path: 'roster',
    path: 'participant/:participantId',
    component: RosterComponent
  },
  /*{
    path: 'team',
    component: TeamComponent
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

