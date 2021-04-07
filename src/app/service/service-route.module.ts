import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesService } from 'src/api/service/service.service';
import { ServiceComponent } from './service.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceComponent
      }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ServicesService]
})
export class ServiceRoutingModule { 
  
}