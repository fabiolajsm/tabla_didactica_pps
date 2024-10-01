import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SplashPage {
  slides: string[] = [
    '/assets/idioma_e.png',
    '/assets/idioma_p.png',
    '/assets/idioma_i.png',
    '/assets/logo.png',
  ];
  constructor(public router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 5500);
  }
}
