import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-detail.component';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: "about",
    loadChildren: () => import('./about/about-routing.module').then(m => m.AboutRoutingModule)
  },
  {
    path: "services",
    loadChildren: () => import('./service/service-route.module').then(m => m.ServiceRoutingModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio-routing.module').then(m => m.PortfolioRoutingModule)
  },
  {
    path: "teams",
    loadChildren: () => import('./team/team-routing.module').then(m => m.TeamRoutingModule)
  },

  {
    path: 'career',
    loadChildren: () => import('./career/career-routing.module').then(m => m.CareerRoutingModule)
  },


  {
    path: 'contact',
    loadChildren: () => import('./contact/contact-routing.module').then(m => m.ContactRoutingModule)
  },

 
  {
    path: 'blog',
    component: BlogComponent,
  },
  {  
      path: 'blog/:id',
      component: BlogDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    CommonModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1 }),
    NgxPageScrollModule,
    MarkdownModule.forRoot()
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
