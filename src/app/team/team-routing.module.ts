import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamService } from 'src/api/team/team.service';
import { TeamComponent } from './team.component';

const routes: Routes = [
    {
        path: '',
        component: TeamComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule],
  providers: [TeamService]
})
export class TeamRoutingModule { }