import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn] 
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