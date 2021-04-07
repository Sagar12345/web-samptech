import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/api/blog/blog.sevice';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  //pagination 
  pageIndex: number;
  pageSize: number;
  length: number;
  
  dataSource: any;
  
  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    this.pageIndex = 0;
    this.pageSize = 12;
    this.initBlog();
  }

  async loadMore(){

  }

  async initBlog() {
    var requestData = {
      "pageIndex": this.pageIndex,
      "pageSize": this.pageSize
    }
    var responseData = await this.blogService.getBlogs(requestData);
    this.dataSource = responseData.data.dataSource;
    this.length = responseData.data.length;
  }
}
