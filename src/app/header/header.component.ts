import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { Inject } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  route: string;
  @ViewChild('htmlContainer') htmlContainer: ElementRef;
  sectionName: string;
  constructor(
    public PageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private Location: Location,
    private activatedRoute: ActivatedRoute,
    private angularFireAnalytics: AngularFireAnalytics
  ) {
    // this.sectionName = '#intro';
    router.events.subscribe((val) => {
      if (Location.path() != '') {
        this.route = Location.path();
      }
    });
  }

  async ngOnInit() {
    (async () => {
      $(function () {
        // Preloader (if the #preloader div exists)
        $(window).on('load', function () {
          if ($('#preloader').length) {
            $('#preloader')
              .delay(100)
              .fadeOut(100, function () {
                $(this).remove();
              });
          }
        });

        // Back to top button
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn(100);
          } else {
            $('.back-to-top').fadeOut(100);
          }
        });
        $('.back-to-top').click(function () {
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            100,
            'easeInOutExpo'
          );
          return false;
        });

        // Header scroll class
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
          } else {
            $('#header').removeClass('header-scrolled');
          }
        });

        if ($(window).scrollTop() > 100) {
          $('#header').addClass('header-scrolled');
        }

        var scrolltoOffset = $('#header').outerHeight() - 21;
        if (window.matchMedia('(max-width: 991px)').matches) {
          scrolltoOffset += 20;
        }

        // Activate smooth scroll on page load with hash links in the url
        $(document).ready(function () {
          if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
              var scrollto = $(initial_nav).offset().top - scrolltoOffset;
              $('html, body').animate(
                {
                  scrollTop: scrollto,
                },
                100,
                'easeInOutExpo'
              );
            }
          }
        });

        // Navigation active state on scroll
        var nav_sections = $('section');
        var main_nav = $('.main-nav, .mobile-nav');

        $(window).on('scroll', function () {
          var cur_pos = $(this).scrollTop() + 200;

          nav_sections.each(function () {
            var top = $(this).offset().top,
              bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              if (cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
              }
              main_nav
                .find('a[href="#' + $(this).attr('id') + '"]')
                .parent('li')
                .addClass('active');
            }
            if (cur_pos < 300) {
              $('.nav-menu ul:first li:first').addClass('active');
            }
          });
        });

        // Mobile Navigation
        if ($('.main-nav').length) {
          var $mobile_nav = $('.main-nav').clone().prop({
            class: 'mobile-nav d-lg-none',
          });
          $('body').append($mobile_nav);
          $('body').prepend(
            '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>'
          );
          $('body').append('<div class="mobile-nav-overly"></div>');

          $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').toggle();
          });

          $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
          });

          $(document).click(function (e) {
            var container = $('.mobile-nav, .mobile-nav-toggle');
            if (
              !container.is(e.target) &&
              container.has(e.target).length === 0
            ) {
              if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('.mobile-nav-overly').fadeOut();
              }
            }
          });
        } else if ($('.mobile-nav, .mobile-nav-toggle').length) {
          $('.mobile-nav, .mobile-nav-toggle').hide();
        }
      });
    })();
  }

  async gotoSection() {
    this.Location.go('/portfolio');
    this.reloadPage();

  }

  // async initSection() {
  //   if (this.sectionName !== '') {
  //     const pageScrollInstance: PageScrollInstance = new PageScrollInstance({
  //       document: this.document,
  //       scrollTarget: this.sectionName,
  //     });
  //     this.PageScrollService.start(pageScrollInstance);

  //     if (this.route === '/career') {
  //       var eventName = this.route.split('/')[1];
  //       this.angularFireAnalytics.logEvent(eventName, {
  //         name: eventName,
  //       });
  //     } else if (this.route !== '/career') {
  //       // console.log("*********************", this.sectionName);
  //       var eventName = this.sectionName.split('#')[1];
  //       this.angularFireAnalytics.logEvent(eventName, {
  //         name: eventName,
  //       });
  //     }
  //   } else {
  //   }
  // }

  // async gotoInitSection() {
  //   this.router.events.subscribe((val) => {
  //     if (this.Location.path() != '') {
  //       this.route = this.Location.path();
  //       console.log('-----------------------------------', val);
  //     }
  //   });
  // }

  async reloadPage() {
    (async () => {
      $(function () {
        location.reload();
      });
    })();
  }
}
