import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../primercomponent/primercomponent';
import HooksAngular from '../hooksangular/hooksangular';
import { ClashRoyale } from '../clashroyale/clashroyale';
import { FormsModule } from '@angular/forms';
import { FormsBinding } from '../formsbinding/formsbinding';
import { FormsRef } from '../formsref/formsref';
import { Prueba } from './components/prueba/prueba';
import { Prueba2Component } from './components/prueba2.component/prueba2.component';
import { Tablamultiplicar } from './components/tablamultiplicar/tablamultiplicar';

@NgModule({
  declarations: [
    App, PrimerComponent, HooksAngular, ClashRoyale, FormsBinding, FormsRef, Prueba, Prueba2Component, Tablamultiplicar
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
