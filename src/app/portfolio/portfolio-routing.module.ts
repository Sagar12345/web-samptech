import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoiloService } from 'src/api/portfoilo/portfoilo.service';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PortfoiloService]
})

export class PortfolioRoutingModule { }