import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from 'src/api/contact/contact.service';
import { Url } from 'src/api/api.constant';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './contact/safePipe';
import { ServicesService } from 'src/api/service/service.service';
import { ClientsService } from 'src/api/client/client.service';
import { TeamService } from 'src/api/team/team.service';
// import { PortfoiloService } from 'src/api/portfoilo/portfoilo.service';
import { MainComponent } from './main/main.component';
import { CareerComponent } from './career/career.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-detail.component';
import { CareerService } from 'src/api/career/career.service';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { AboutsService } from 'src/api/about/about.service';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAnalyticsModule, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { BlogService } from 'src/api/blog/blog.sevice';

import { MarkdownModule } from 'ngx-markdown';
import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
// import { BlogRoutingModule } from './blog/blog-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    CareerComponent,
    BlogComponent,
    BlogDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgxUsefulSwiperModule,
    FormModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageFullscreenViewModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireMessagingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [Url, 
    ContactService, 
    ServicesService, 
    ClientsService, 
    TeamService, 
    // PortfoiloService, 
    CareerService, 
    AboutsService, 
    UserTrackingService, 
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
