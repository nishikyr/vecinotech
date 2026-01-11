import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Componente de página de bienvenida pública de VecinoTech
 */
@Component({
  selector: 'app-bienvenida',
  imports: [CommonModule, RouterLink],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {

  //#region Propiedades

  /** Estadísticas de la plataforma */
  stats = [
    { value: '500+', label: 'Solicitudes Completadas' },
    { value: '150+', label: 'Voluntarios Activos' },
    { value: '20', label: 'Barrios Conectados' },
    { value: '95%', label: 'Satisfacción' }
  ];

  /** Características principales */
  features = [
    {
      icon: 'verified_user',
      text: 'Voluntarios verificados de tu barrio'
    },
    {
      icon: 'video_call',
      text: 'Asistencia por chat y videollamada'
    },
    {
      icon: 'workspace_premium',
      text: 'Sistema de reconocimientos'
    }
  ];

  //#endregion

  //#region Métodos

  /**
   * Navega a la sección de registro
   */
  scrollToRegister(): void {
    // TODO: Implementar navegación a registro
    console.log('Navegar a registro');
  }

  /**
   * Muestra información sobre cómo funciona
   */
  showHowItWorks(): void {
    // TODO: Implementar modal o navegación
    console.log('Mostrar cómo funciona');
  }

  /**
   * Alterna el modo oscuro
   */
  toggleDarkMode(): void {
    document.documentElement.classList.toggle('dark');
  }

  //#endregion
}
