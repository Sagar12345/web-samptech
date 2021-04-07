import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from 'src/api/blog/blog.sevice';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component..css'],
})
export class BlogDetailsComponent implements OnInit {
    id: string;
    blogs: any;
    constructor(private route: ActivatedRoute, private title: Title, private meta:Meta, private blogService:BlogService) { }

    async ngOnInit() {
        this.route.paramMap.subscribe(async (params: ParamMap) => {
           this.id = params.get('id');
           var responseData = await this.blogService.getBlog(this.id);
           this.title.setTitle(responseData.data.title);
           var data = responseData.data.location + responseData.data.detailSrc;
           this.blogs = data;
        });
        
        // this.meta.updateTag({name: "description", content: "website in digital marketing"});
    }
}
