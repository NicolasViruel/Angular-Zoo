import { Component, OnInit } from "@angular/core";
// import * as $ from 'jquery';
// import 'dotdotdot-js'; 

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
    public titulo: string;
    public nombreDelParque: string;
    public miParque: any;

    constructor() {
        this.titulo = 'Esta es la tienda';
        this.nombreDelParque = '';
    }

    ngOnInit(): void {
        // $('#textojq').hide();
        // $('#botonjq').click(function(){
        //     console.log('click desde Jquery');
        //     $('#textojq').slideToggle();  
        // });
    }

    mostrarNombre(): void {
        console.log(this.nombreDelParque);
    }

    verDatosPadre(event: any): void {
        console.log(event);
        this.miParque = event
    }
}
