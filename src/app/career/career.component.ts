import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { CareerService } from 'src/api/career/career.service';

export interface Career {
  tech ?: string;
  exp ?: string;
  opening ?: string;
  "_id" ?: string;
  "skill" ?: any; 
  "createAt" ?: string;
  "location" ?: string;
  imageSrc ?: string;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})

export class CareerComponent implements OnInit {
  careerForm : FormGroup;
  @ViewChild('fileUploader') fileUploader:ElementRef;
  currentOpening : boolean = false;  
  career : Career[];
  skills : any;

  name : string;

  constructor(private formBuilder : FormBuilder, private careerService: CareerService, private title: Title, private meta:Meta) {
    this.careerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      imageSrc: [null, Validators.required],
    });
  }

  async ngOnInit() {
    this.title.setTitle('Jobs in Samp Technologies Private Limited');
    this.meta.updateTag({
      name: 'description',
      content:
        'Samp Technologies Pvt. Ltd. is one of the leading IT solutions providing company in Surat. We strive to provide the best IT solutions to our valuable clients. We aim to provide 100% genuine, innovative and creative web solutions to uplift the digital presence of our esteemed clients.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Jobs in Surat,Samp Technologies,Unity Developer,Unity3D Developer,Game Developer,Full Stack Developer,NodeJS Development,' +
      'Android App Development,IOS App Development,App Development,2D Graphics Design,3D Graphics Design,Digital Marketing,'+ 
      'SEO,ASO,App Store Optimization,SMM,Social Media Marketing,SEM,Search Engine Marketing,Google Ads,' + 
      'Facebook Ads,ORM,Online Reputation Management,LinkdIN Marketing,Instagram Ads,Twitter Ads,Facebook Marketing,Content marketing,Email marketing,Email Ads,Samp Technology,'
    })

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'Developer Jobs in Surat'
    })

    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://samptechnologies.com/career'
    })

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Samp Technologies Private Limited'
    })

    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Samp Technologies Pvt. Ltd. is one of the leading IT solutions providing company in Surat. We strive to provide the best IT solutions to our valuable clients. We aim to provide 100% genuine, innovative and creative web solutions to uplift the digital presence of our esteemed clients.'
    })

    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://samptechnologies.com/assets/img/logo.png'
    })

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Samp Technology'
    })

    this.meta.updateTag({
      name: 'og:type',
      content: 'website'
    })

    this.meta.updateTag({
      name: 'og:url',
      content: 'https://samptechnologies.com/career'
    })

    this.meta.updateTag({
      name: 'og:title',
      content: 'Job in Samp Technologies'
    })

    this.meta.updateTag({
      name: 'og:description',
      content: 'Samp Technologies Pvt. Ltd. is one of the leading IT solutions providing company in Surat. We strive to provide the best IT solutions to our valuable clients. We aim to provide 100% genuine, innovative and creative web solutions to uplift the digital presence of our esteemed clients.'
    })

    this.meta.updateTag({
      name: 'og:image',
      content: 'https://samptechnologies.com/assets/img/logo.png'
    })

    this.meta.updateTag({
      name: 'og:local',
      content: 'en_US'
    })

    this.initCareer();
     
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.careerForm.patchValue({
      imageSrc: file
    });
    this.fileUploader.nativeElement.innerText = Array.from((event.target as HTMLInputElement).files)
      .map(f => f.name)
      .join(', ');
    this.careerForm.get('imageSrc').updateValueAndValidity();
  }

  async initCareer() {
    var responseData = await this.careerService.getCareer();
    if(responseData.code == 1) {
      if(responseData.data.length == 0) {
        this.currentOpening = false;
      } else {
        this.career = responseData.data;
        this.currentOpening = true;
      }
    }
  }

  openSkill(argSkill) {
    this.skills = argSkill.skill;
    this.name = argSkill.tech;
  }


  async onSubmit(){
    var formData: any = new FormData();
    formData.append("name", this.careerForm.get('name').value);
    formData.append("imageSrc", this.careerForm.get('imageSrc').value);
    formData.append("mobile", this.careerForm.get('mobile').value);
    formData.append("email", this.careerForm.get('email').value);
    var responseData = await this.careerService.addContact(formData);
    if(responseData.code == 1) {
      this.clearForm();
    } else {

    }
    
    
  }


  async clearForm(){
    this.careerForm.patchValue({
      name: [''],
      mobile: [''],
      email: [''],
      imageSrc: [null]
    });
    this.fileUploader.nativeElement.value = null;
    (async () => { 
        location.reload();
    })()
  }

  openApply(car) {
    this.name = car.tech; 
  }

}
