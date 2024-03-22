import { Component } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
  <div *ngIf="emailContacto">
    <h4>{{title}}</h4>
      <strong>Email de Contacto:</strong> {{emailContacto}}
      <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </div>
  `,
})
export class MostrarEmailComponent {
  title = 'Mostrar Email';
  emailContacto: string = '';

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto') || '';
  }

  ngDoCheck() {
    const emailGuardado = localStorage.getItem('emailContacto');
    if (this.emailContacto !== emailGuardado) {
      this.emailContacto = emailGuardado || '';
    }
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    this.emailContacto = '';
  }
}
