import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule} from './service-route.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,ServiceRoutingModule
  ],
  
})
export class ServiceModule {

 }
