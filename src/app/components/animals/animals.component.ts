import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html', 
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

    ngOnInit(): void {
        console.log("Animals Cargado!");
        
    }


}