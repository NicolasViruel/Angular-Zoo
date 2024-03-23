import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from "./app.routing";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parque.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';

// importar nuestro nuevo modulo
import { ModuloEmailModule } from './components/moduloEmail/components/moduloemail.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ModuloEmailModule,
    AdminModule,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
