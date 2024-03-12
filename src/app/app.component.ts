import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NGZOO';
  emailContacto: string = "";

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto') || ''; // asignar un valor predeterminado en caso de que no haya nada en el localStorage
  }

  ngDoCheck(): void {
    const emailGuardado = localStorage.getItem('emailContacto');
    if (this.emailContacto !== emailGuardado) { // verifica si el email en el localStorage es diferente al que tienes actualmente
      this.emailContacto = emailGuardado || ''; // actualiza el emailContacto solo si es diferente
    }
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto'); //vaciar solo los datos en emailContacto. 
    localStorage.clear() //vacia todo el localStorage
    this.emailContacto = '';
  }




}
