import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html', 
})
export class ContactComponent implements OnInit {
  title = 'Contacto';
  emailContacto: string = ""



    ngOnInit(): void {
        console.log("Contact Cargado!");
        
    }

    guardarEmail(){
      console.log(this.emailContacto);
      //guardar informacion en el localStorage y asi poder ser consultado, desde cualquier componente
      localStorage.setItem('emailContacto', this.emailContacto)
      
    }


}