import { Component, OnInit } from '@angular/core';
import { PageScrollService } from "ngx-page-scroll-core";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public PageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  ngOnInit(): void {
  }

  gotoSection(sectionName) {
    this.PageScrollService.scroll({ document: this.document, scrollTarget: sectionName });
  }
}
