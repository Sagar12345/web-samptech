import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career.component';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
// import { CareerService } from 'src/api/career/career.service';

const routes: Routes = [
    {
        path: '',
        component: CareerComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormModule,ReactiveFormsModule],
  // providers: [CareerService]
})

export class CareerRoutingModule { }