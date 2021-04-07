import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from "./blog.component";
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './blog-detail.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [BlogComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule { }