//importar modulos necesarios para crear modulos
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';


//importar componentes
import { GuardarEmailComponent } from "./guardar-email/guardar-email.component";
import { MostrarEmailComponent } from "./mostrar-email/mostrar-email.component";
import { MailEmailComponent } from "./main-email/mail-email.component";

//generar el nuevo modulo con ngModule
@NgModule({
    imports: [ CommonModule , FormsModule],
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MailEmailComponent
    ],
    exports: [MailEmailComponent]
})

export class ModuloEmailModule { }