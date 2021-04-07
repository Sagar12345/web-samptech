import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/api/client/client.service';
import { TeamService } from 'src/api/team/team.service';
import { SwiperOptions } from 'swiper';


export interface Team {
  "id"?: string;
  "imageSrc"?: string;
  "imageAlt"?: string;
  "name": string;
  "jobTitle"?: string;
  "location" ?: string;
}

export interface Teams {
  "id"?: string;
  "title"?: string;
  "description"?: string;
  "teams"?: Team[];
}

export interface Client {
  "id"?: string;
  "imageSrc"?: string;
  "imageAlt"?: string;
  "location"?: string;
  "clientname"?:string;
  "review"?:string;
}

export interface Clients {
  "id"?: string;
  "title"?: string;
  "description"?: string;
  "clients"?: Client[];
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  client: Clients;
  team: Teams;

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true
  };

  constructor(private clientsService: ClientsService, private teamService: TeamService) {}

  async ngOnInit() {
    var responseData = await this.teamService.getService();
    if(responseData.code == 1) {
      this.team = responseData.data;
      console.log(this.team.teams)
    } 
    var responseData = await this.clientsService.getService();
    if(responseData.code == 1) {
      this.client = responseData.data;
    }
  }

  onSwiper(swiper) {
    console.log(swiper)
  }
  onSlideChange() {
    console.log('slide change')
  }
}
