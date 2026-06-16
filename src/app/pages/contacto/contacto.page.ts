/**
 * Página de Contacto
 * 
 * Este componente permite a los usuarios ver la información de contacto
 * del estudiante y enviar un mensaje mediante un formulario con validaciones.
 * 
 * LO QUE SE PROGRAMA (no generado automáticamente):
 * - Validaciones personalizadas para cada campo del formulario
 * - Control de estado del formulario (válido/inválido)
 * - Mensajes de error dinámicos según el tipo de error
 * - Lógica de envío con verificación previa
 */
import { Component } from '@angular/core';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon,
  IonMenuButton, IonButtons, IonNote
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
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
    IonMenuButton, IonButtons, IonNote,
    FormsModule,
    CommonModule,
    NgIf
  ]
})
export class ContactoPage {
  
  // ============================================
  // PROPIEDADES DEL FORMULARIO (LO QUE PROGRAMO)
  // ============================================
  
  /** Almacena el nombre ingresado por el usuario */
  nombre: string = '';
  
  /** Almacena el correo electrónico ingresado */
  email: string = '';
  
  /** Almacena el mensaje ingresado por el usuario */
  mensaje: string = '';
  
  /** 
   * Controla si se intentó enviar el formulario
   * Se usa para mostrar errores solo después del primer intento
   */
  intentoEnviar: boolean = false;

  // ============================================
  // VALIDACIONES PERSONALIZADAS (LO QUE PROGRAMO)
  // ============================================
  
  /**
   * Valida que el campo nombre no esté vacío
   * @returns true si el nombre es válido
   */
  get nombreValido(): boolean {
    return this.nombre.trim().length > 0;
  }

  /**
   * Valida el formato del correo electrónico
   * Expresión regular que verifica: texto@texto.dominio
   * @returns true si el email tiene formato correcto
   */
  get emailValido(): boolean {
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patronEmail.test(this.email);
  }

  /**
   * Valida que el mensaje tenga al menos 10 caracteres
   * @returns true si el mensaje es suficientemente descriptivo
   */
  get mensajeValido(): boolean {
    return this.mensaje.trim().length >= 10;
  }

  /**
   * Verifica si todo el formulario es válido
   * @returns true si todos los campos cumplen las validaciones
   */
  get formularioValido(): boolean {
    return this.nombreValido && this.emailValido && this.mensajeValido;
  }

  // ============================================
  // CONSTRUCTOR E ICONOS
  // ============================================
  
  constructor() {
    // Registro de iconos SOLO con string keys
    addIcons({
      'send-outline': sendOutline,
      'call-outline': callOutline,
      'location-outline': locationOutline
    });
  }

  // ============================================
  // MÉTODO DE ENVÍO (LO QUE PROGRAMO)
  // ============================================
  
  /**
   * Maneja el envío del formulario
   * 
   * LO QUE SE PROGRAMA:
   * 1. Marca que se intentó enviar (para mostrar errores)
   * 2. Verifica si el formulario es válido
   * 3. Si es válido: muestra confirmación y limpia el formulario
   * 4. Si es inválido: no hace nada, los errores se muestran automáticamente
   */
  enviarMensaje() {
    this.intentoEnviar = true;
    
    if (this.formularioValido) {
      alert("Mensaje enviado por: " + this.nombre + "\nEmail: " + this.email + "\nMensaje: " + this.mensaje);
      this.limpiarFormulario();
    }
  }

  /**
   * Restablece todos los campos del formulario a su estado inicial
   * Se ejecuta después de un envío exitoso
   */
  limpiarFormulario() {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.intentoEnviar = false;
  }
}