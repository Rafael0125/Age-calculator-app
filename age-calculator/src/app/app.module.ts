import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormDataNacimentoComponent } from './calculadora/form-data-nacimento/form-data-nacimento.component';
import { LetreiroResultadoComponent } from './calculadora/letreiro-resultado/letreiro-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    FormDataNacimentoComponent,
    LetreiroResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
