import { Component, OnInit } from '@angular/core';
import { PageScrollInstance, PageScrollService } from "ngx-page-scroll-core";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { AboutsService } from 'src/api/about/about.service';

export interface AboutUs {
  "id"?: string;
  "title"?: string;
  "description"?: string;
  innerHtml ?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  route: string;
  sectionName: string;
  aboutUs: AboutUs
  constructor(public PageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private aboutsService:AboutsService) {
  }
  ngOnInit(): void {
    $(function () {
    });
    this.initAboutUs();
  }
  async initAboutUs() {
    var responseData = await this.aboutsService.getService();
    this.aboutUs = responseData.data;
    //this.innerHtml = ' <div class="row about-container"> <div class="col-lg-6 content order-lg-1 order-2"> <p> We offer mobile app development services for various industries such as Android, iOS etc as well as web design, development, SEO services, logo design etc for clients across the world. We ensure to offer our best service to the clients. </p> <div class="icon-box" data-aos="fade-up"> <div class="icon"> <i class="fa fa-shopping-bag"></i> </div> <h4 class="title"> App & game Development </h4> <p class="description"> We provide every game and app development service with all customization options using the latest methods and technologies. We have gained 100% client satisfaction. </p> </div> <div class="icon-box" data-aos="fade-up"> <div class="icon"> <i class="fa fa-photo"></i> </div> <h4 class="title"> Service </h4> <p class="description"> Each application and every service are customs made meaning it will be developed using the latest methods and technologies will be scalable to any point. </p> </div> <div class="icon-box" data-aos="fade-up"> <div class="icon"> <i class="fa fa-bar-chart"></i> </div> <h4 class="title"> Clients </h4> <p class="description"> We have worked with clients for over 6 years. Some of our clients are from Canada, USA, UK and many other countries. </p> </div> </div> <div class="col-lg-6 background order-lg-2" data-aos="zoom-in"> <img src="assets/img/about-img.svg" class="img-fluid" alt=""> </div> </div> <div class="row about-extra"> <div class="col-lg-6" data-aos="fade-right"> <img src="assets/img/about-extra-1.svg" class="img-fluid" alt=""> </div> <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left"> <h4> Why Our Service Is Unique? </h4> <p> Team of professionals that work full time on developing mobile applications, Web Design, Web Development, SEO Optimization, Logo Design etc. </p> <p> Samp Technologies is best known for its Creativity, Design, Game, Mobile App and Software Development with an innovative, creative and pragmatic approach, software development at Samp Technologies is no less than an exciting and engaging process. </p> </div> </div> <div class="row about-extra"> <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left"> <img src="assets/img/about-extra-2.svg" class="img-fluid" alt=""> </div> <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right"> <h4> Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit. </h4> <p> Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. </p> <p> Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto. </p> <p> Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia. </p> </div> </div>';
  }
}
