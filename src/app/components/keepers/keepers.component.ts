import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'keppers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn] 
})
export class KeepersComponent implements OnInit {
  title = 'Cuidadores';

    ngOnInit(): void {
        console.log("keppers Cargado!");
        
    }


}