import { Component, OnInit } from "@angular/core";
declare var jQuery:any;
declare var $:any;


@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html', //aca podria ir el codigo html en caso que quisieramos
    styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {
    public titulo: string
    public nombreDelParque: string;
    public miParque: any

    constructor() {
        this.titulo = 'Esta es la tienda';
        this.nombreDelParque = '';
    }

    ngOnInit(): void {
        $('#textojq').hide();
        $('#botonjq').click(function(){
            console.log('click desde Jquery');
          $('#textojq').slideToggle();  
        });
        $("#caja").dotdotdot({}); 
    }


    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosPadre(event: any){
        console.log(event);
        this.miParque = event
    }
}