import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFab,
  IonFabList,
  IonFabButton,
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

type LANGUAGES = 'SPANISH' | 'PORTUGUESE' | 'ENGLISH';
type THEMES = 'COLORS' | 'NUMBERS' | 'ANIMALS';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
  ],
})
export class HomePage {
  public selectedLanguage: LANGUAGES = 'SPANISH';
  public selectedTheme: THEMES = 'COLORS';
  public audio: HTMLAudioElement = new Audio();

  public audioItems = [
    {
      animal: {
        audio: 'gato',
        image: 'gato.png',
        alt: 'gato',
      },
      number: {
        audio: 'uno',
        image: 'uno.png',
        alt: 'uno',
      },
      color: {
        audio: 'azul',
        image: 'azul.png',
        alt: 'azul',
      },
    },
    {
      animal: {
        audio: 'perro',
        image: 'perro.png',
        alt: 'perro',
      },
      number: {
        audio: 'dos',
        image: 'dos.png',
        alt: 'dos',
      },
      color: {
        audio: 'amarillo',
        image: 'amarillo.png',
        alt: 'amarillo',
      },
    },
    {
      animal: {
        audio: 'caballo',
        image: 'caballo.png',
        alt: 'caballo',
      },
      number: {
        audio: 'tres',
        image: 'tres.png',
        alt: 'tres',
      },
      color: {
        audio: 'rojo',
        image: 'rojo.png',
        alt: 'rojo',
      },
    },
    {
      animal: {
        audio: 'conejo',
        image: 'conejo.png',
        alt: 'conejo',
      },
      number: {
        audio: 'cuatro',
        image: 'cuatro.png',
        alt: 'cuatro',
      },
      color: {
        audio: 'verde',
        image: 'verde.png',
        alt: 'verde',
      },
    },
    {
      animal: {
        audio: 'carpincho',
        image: 'carpincho.png',
        alt: 'carpincho',
      },
      number: {
        audio: 'cinco',
        image: 'cinco.png',
        alt: 'cinco',
      },
      color: {
        audio: 'morado',
        image: 'morado.png',
        alt: 'morado',
      },
    },
    {
      animal: {
        audio: 'tortuga',
        image: 'tortuga.png',
        alt: 'tortuga',
      },
      number: {
        audio: 'seis',
        image: 'seis.png',
        alt: 'seis',
      },
      color: {
        audio: 'rosa',
        image: 'rosa.png',
        alt: 'rosa',
      },
    },
  ];

  constructor(private auth: AuthService, private router: Router) {
    addIcons({});
  }

  selectLanguage(language: LANGUAGES) {
    this.selectedLanguage = language;
  }

  selectTheme(theme: THEMES) {
    this.selectedTheme = theme;
  }

  handlePlayAudio(selection: string) {
    this.audio.pause();
    this.audio = new Audio(
      `assets/audios/${selection}_${this.selectedLanguage.toLowerCase()}.mp3`
    );
    this.audio.play();
  }

  handleLogout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
}
