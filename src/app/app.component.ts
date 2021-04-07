import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string;
  constructor(router:Router) {
    // console.log(router.url)
    window.onbeforeunload = function() { return "Your work will be lost."; };
  }
}
