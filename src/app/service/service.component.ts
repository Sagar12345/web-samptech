import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/api/service/service.service';

export interface ServiceData {
  icon?: string;
  iconcolor?: string;
  title?: string;
  description?: string;
}
export interface Service {
  _id?: string;
  title?: string;
  description?: string;
  services?: ServiceData[];
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service;
  constructor(private servicesService: ServicesService) { }

  async ngOnInit() {
   var responseData = await this.servicesService.getService();
   if(responseData.code == 1) {
     if(responseData.data.services.length > 0) {
      this.service = responseData.data;
     } 
   } 
  }
}
