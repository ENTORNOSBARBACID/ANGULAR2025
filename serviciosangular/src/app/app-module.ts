import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Personacomponent } from './components/personacomponent/personacomponent';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersona } from '../service/servicePersona';
import { Personasstandalone } from './components/personasstandalone/personasstandalone';

@NgModule({
  declarations: [
    App,
    Personacomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Personasstandalone
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), provideHttpClient(), ServicePersona
  ],
  bootstrap: [App]
})
export class AppModule { }
