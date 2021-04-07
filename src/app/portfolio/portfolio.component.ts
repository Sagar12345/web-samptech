
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfoiloService } from 'src/api/portfoilo/portfoilo.service';

export interface Portfoilo {
  "_id"?: string;
  "imageSrc"?: string;
  "imageAlt"?: string;
  "imageName"?: string;
  "type"?: string;
  "location"?: string;
  "linkPlaystore"?: string;
  "linkName"?: string;
}

export interface Portfoilos {
  "id"?: string;
  "title"?: string;
  "description"?: string;
  "portfolios"?: Portfoilo[];
}


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', './../../assets/css/style.css']
})
export class PortfolioComponent implements OnInit {
  currentIndex: any = -1;
  showFlag: any = false;
  portfoilos: Portfoilos;
  imageObject: Array<object>;
  constructor(private portfoiloService: PortfoiloService, private location : Location) {}

  async ngOnInit() {
    var responseData = await this.portfoiloService.getService();
    if(responseData.code == 1) {
      if(responseData.data != undefined) {
        console.log(responseData.data)
        this.portfoilos = responseData.data;
        this.imageObject = responseData.data.portfolios.map(data=> {
          data['image'] = data.location + data.imageSrc;
          data['title'] = data.imageName;
          data['alt'] = data.imageAlt;
          return data;
        });
      }
    }
  }

  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}