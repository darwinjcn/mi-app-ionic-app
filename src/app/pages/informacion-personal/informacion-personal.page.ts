/**
 * Página de Información Personal
 * 
 * Este componente muestra los datos personales del estudiante Darwin Colmenares,
 * incluyendo su nombre completo, carrera universitaria y correo electrónico.
 * Se utilizan componentes de Ionic como IonCard para presentar la información
 * de manera organizada y visualmente atractiva.
 */
import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonIcon, IonLabel, IonMenuButton, IonButtons
} from '@ionic/angular/standalone';
import { personOutline, schoolOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonIcon, IonLabel, IonMenuButton, IonButtons
  ]
})
export class InformacionPersonalPage {
  
  /**
   * Constructor del componente
   * En el constructor se registran los iconos que se utilizarán en la página
   * mediante la función addIcons de ionicons. Los iconos se registran con
   * un identificador string que luego se usa en el template HTML.
   */
  constructor() {
    // Registro de iconos para la página de información personal
    // Cada icono se asocia a un nombre string que se usa en el HTML con [name]
    addIcons({
      'person-outline': personOutline,   // Icono de persona para el nombre
      'school-outline': schoolOutline,   // Icono de escuela para la carrera
      'mail-outline': mailOutline        // Icono de correo para el email
    });
  }
}