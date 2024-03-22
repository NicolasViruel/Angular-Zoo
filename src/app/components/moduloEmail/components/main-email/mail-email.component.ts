import { Component } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="card mx-5 my-5">
      <div class="card-header">
        <h2 class="card-title">{{ title }}</h2>
      </div>
      <div class="card-body">
        <mostrar-email></mostrar-email>
        <guardar-email></guardar-email>
      </div>
    </div>
  `,
})
export class MailEmailComponent {
  title = 'Modulo de Emails';
}
