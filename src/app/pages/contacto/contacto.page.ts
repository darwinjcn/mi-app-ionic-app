/**
 * Página de Contacto
 * 
 * Este componente permite a los usuarios ver la información de contacto
 * del estudiante Darwin Colmenares, incluyendo su número de teléfono
 * y dirección en Caracas, Venezuela. Además, incluye un formulario
 * para que los visitantes puedan enviar un mensaje.
 */
import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon,
  IonMenuButton, IonButtons
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { sendOutline, callOutline, locationOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon,
    IonMenuButton, IonButtons,
    FormsModule  // Módulo necesario para el two-way data binding con ngModel
  ]
})
export class ContactoPage {
  
  /**
   * Propiedades del componente para el formulario de contacto
   * Se utilizan con two-way data binding [(ngModel)] en el template HTML
   */
  nombre: string = '';    // Almacena el nombre ingresado por el usuario
  email: string = '';     // Almacena el correo electrónico ingresado
  mensaje: string = '';   // Almacena el mensaje ingresado por el usuario

  /**
   * Constructor del componente
   * Registra los iconos que se usarán en esta página
   */
  constructor() {
    // Registro de iconos para la página de contacto
    addIcons({
      'send-outline': sendOutline,       // Icono de avión de papel para enviar
      'call-outline': callOutline,         // Icono de teléfono para el contacto
      'location-outline': locationOutline  // Icono de ubicación para la dirección
    });
  }

  /**
   * Método enviarMensaje()
   * 
   * Se ejecuta cuando el usuario hace clic en el botón "Enviar Mensaje".
   * Muestra una alerta con los datos ingresados en el formulario.
   * En una aplicación real, aquí se enviaría la información a un servidor.
   */
  enviarMensaje() {
    // Alerta que muestra los datos del formulario (simulación de envío)
    alert(`Mensaje enviado por: ${this.nombre}\nEmail: ${this.email}\nMensaje: ${this.mensaje}`);
  }
}