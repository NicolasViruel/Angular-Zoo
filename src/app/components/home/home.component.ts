import { Component, OnInit } from '@angular/core';
import { rotacion } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css'],
  animations: [rotacion]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NGZOO';

    ngOnInit(): void {
        console.log("Home Cargado!");
        
    }


}
