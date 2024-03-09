import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: 'parques',
    templateUrl: './parque.component.html',
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck {
    @Input()nombre: string; //Input sirve para pasar valores desde otro componente 
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;
    

    //emisor del dato Output y tomar el evento del hijo y pasarle al padre
    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Parque natural para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto= false;
    }
    //escucha constantemente los cambios de los valores
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log("Existen cambios en las propiedades");
        
        
    }
    //se lanza solo una vez o cuando el componente se lanze
    ngOnInit(): void {
        console.log("metodo OnInit lanzado");
        
    }
    //cada vez que se ejecuta un evento este metodo se ejecuta, luego de iniciar el componente.
    ngDoCheck(): void {
        console.log('El DoCheck se ha lanzado');
        
    }

    emitirEvento(){
        this.pasameLosDatos.emit( {
            'nombre' : this.nombre,
            'metros': this.metros,
            'vegetacion' :this.vegetacion,
            'abierto': this.abierto,
        });
    }




}