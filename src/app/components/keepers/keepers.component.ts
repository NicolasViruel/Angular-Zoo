import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keppers',
  templateUrl: './keepers.component.html', 
})
export class KeepersComponent implements OnInit {
  title = 'Cuidadores';

    ngOnInit(): void {
        console.log("keppers Cargado!");
        
    }


}