import { Component } from "@angular/core";

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html', //aca podria ir el codigo html en caso que quisieramos
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
    public titulo: string
    public nombreDelParque: string;
    public miParque: any

    constructor() {
        this.titulo = 'Esta es la tienda';
        this.nombreDelParque = '';
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosPadre(event: any){
        console.log(event);
        this.miParque = event
    }
}