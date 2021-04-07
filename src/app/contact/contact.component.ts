import { Component, OnInit } from '@angular/core';
import { PageScrollService } from "ngx-page-scroll-core";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/api/contact/contact.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as $ from 'jquery';
export interface ContactPage {
  "_id"?: string;
  "url"?: string;
  "title"?: string;
  "address"?: string;
  "email"?: string;
  "phone"?: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactPage: ContactPage;
  constructor(public sanitizer: DomSanitizer, public PageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, 
                  private formBuilder: FormBuilder, private contactService: ContactService) { }
  async ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(8)]],
      message: ['', [Validators.required, Validators.minLength(8)]],
    });
    var resData = await this.contactService.getContact();
    if (resData.code == 1) {
      this.contactPage = resData.data;
      (async () => {
        $('iframe').each(function() {
          this.contentWindow.location.reload(true);
        });
      })
    } else {
      this.contactPage = {
        title: "Contact Us",
        url: "https://maps.google.com/maps?q=samp%20tech&t=&z=13&ie=UTF8&iwloc=&output=embed",
        address: "416 Avalon Business Hub, Surat, GJ 395004",
        email: "support@samptechnologies.com",
        phone: "+91 90339 06480"
      }
    }
  }
  async onData() {
    if (this.contactForm.valid) {
      var data = await this.contactService.addContact(this.contactForm.value);
      if (data.code == 1) {
        this.contactForm.reset();
      } else {

      }
    }
  }
}
