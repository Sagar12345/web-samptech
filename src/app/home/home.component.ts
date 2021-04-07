import { Component, OnInit } from '@angular/core';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sectionName: string;
  constructor(
    public PageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Samp Technologies Private Limited');
    this.meta.addTag({
      name: 'description',
      content:
        'Samp Technologies Pvt Ltd is one of the Best Unity Game, Custom Web Design, iOS, Android Application Development, Digital Marketing, SEO Type IT Services providing company in India & USA. We strive to provide the best IT solutions to our valuable clients.',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Web Design and Development Company, Best App development Company, Best Digital marketing company Best Software Company, Software Solutions Company, Best IT Company, Top IT company, Software Development Service, Software Development Agency, IT solution company, Best Software Development Company, Web Development Company, Web Development Services, IT Service Provider, IT Service Company'
    })

    this.meta.addTag({
      name: 'twitter:card',
      content: 'Transforming your Business Digitally!'
    })

    this.meta.addTag({
      name: 'twitter:site',
      content: 'https://samptechnologies.com'
    })

    this.meta.addTag({
      name: 'twitter:title',
      content: 'Samp Technologies Private Limited'
    })

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Samp Technologies Pvt. Ltd. is one of the leading IT solutions providing company in Surat. We strive to provide the best IT solutions to our valuable clients. We aim to provide 100% genuine, innovative and creative web solutions to uplift the digital presence of our esteemed clients.'
    })

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://samptechnologies.com/assets/img/logo.png'
    })

    this.meta.addTag({
      name: 'twitter:creator',
      content: 'Samp Technology'
    })

    this.meta.addTag({
      property: "fb:app_id",
      content: "2857249404512593"
    })


    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    })


    this.meta.addTag({
      property: 'og:url',
      content: 'https://samptechnologies.com'
    })

    this.meta.addTag({
      property: 'og:title',
      content: 'Samp Technologies Private Limited'
    })

    this.meta.addTag({
      property: 'og:description',
      content: 'Samp Technologies Pvt. Ltd. is one of the leading IT solutions providing company in Surat. We strive to provide the best IT solutions to our valuable clients. We aim to provide 100% genuine, innovative and creative web solutions to uplift the digital presence of our esteemed clients.'
    })

    this.meta.addTag({
      property: 'og:image',
      content: 'https://samptechnologies.com/assets/img/logo.png'
    })


    this.meta.addTag({
      property: 'og:local',
      content: 'en_US'
    })
    
    
  }

  gotoSection(sectionName) {
    this.sectionName = sectionName;
    this.initSection();
  }

  initSection() {
    if (this.sectionName !== '') {
      const pageScrollInstance: PageScrollInstance = new PageScrollInstance({
        document: this.document,
        scrollTarget: this.sectionName,
        advancedInlineOffsetCalculation: true,
      });
      this.PageScrollService.start(pageScrollInstance);
    } else {
    }
  }
}
