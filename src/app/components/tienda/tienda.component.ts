import { Component, OnInit } from "@angular/core";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { fadeIn } from '../animation';

import 'dotdotdot-js';
declare var jQuery:any;
declare var $:any; 

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
                border: '5px solid yellow',
                background: 'red',
                borderRadius: '50px',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('300ms linear')),
            transition('active => inactive', animate('300ms linear')),
        ]),
        fadeIn
    ]
})

export class TiendaComponent implements OnInit {
    public titulo: string;
    public nombreDelParque: string;
    public miParque: any;
    public status: string;



    constructor() {
        this.titulo = 'Esta es la tienda';
        this.nombreDelParque = '';
        this.status = 'inactive'
    }

    cambiarEstado(status:string){
        if (status == 'inactive') {
            this.status = 'active';
        }else{
            this.status = 'inactive';
        }
    }

    ngOnInit(): void {
        $('#textojq').hide();
        $('#botonjq').click(function(){
            console.log('click desde Jquery');
            $('#textojq').slideToggle();  
        })
        $('#caja').dotdotdot({}); ;
    }

    mostrarNombre(): void {
        console.log(this.nombreDelParque);
    }

    verDatosPadre(event: any): void {
        console.log(event);
        this.miParque = event
    }
}
