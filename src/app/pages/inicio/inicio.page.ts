/**
 * Página de Inicio
 * Muestra la pantalla principal con mensaje de bienvenida
 */
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons]
})
export class InicioPage {
  constructor() {}
}