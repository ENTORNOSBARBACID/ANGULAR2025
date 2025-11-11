import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Personacomponent } from './components/personacomponent/personacomponent';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersona } from '../service/servicePersona';
import { Personasstandalone } from './components/personasstandalone/personasstandalone';
import { Platillafuncionsimple } from './components/platillafuncionsimple/platillafuncionsimple';
import { ServicePlantilla } from '../service/service.plantilla';
import { Platillafuncionmultiple } from './components/platillafuncionmultiple/platillafuncionmultiple';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Personacomponent,
    Platillafuncionsimple,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone,
    FormsModule,
    Platillafuncionmultiple
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePersona, ServicePlantilla
  ],
  bootstrap: [App]
})
export class AppModule { }
