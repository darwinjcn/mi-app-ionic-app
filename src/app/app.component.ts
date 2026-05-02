/**
 * Componente principal de la aplicación
 * Configura el menú lateral (IonMenu) con las opciones de navegación
 * Usa Angular Router para la navegación entre páginas
 */
import { Component } from '@angular/core';
import { 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { homeOutline, personOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar,
    IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle
  ]
})
export class AppComponent {
  
  constructor(private router: Router) {
    // Registro de iconos para el menú lateral
    addIcons({
      'home-outline': homeOutline,
      'person-outline': personOutline,
      'mail-outline': mailOutline
    });
  }

  /**
   * Método para navegar a una ruta específica
   * Cierra el menú lateral y redirige a la página seleccionada
   * @param ruta - Ruta destino para la navegación
   */
  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}