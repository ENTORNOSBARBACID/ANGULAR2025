import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';

import { App } from './app';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Musicacomponent } from './components/musicacomponent/musicacomponent';
import { Cinecomponent } from './components/cinecomponent/cinecomponent';
import { Menucomponent } from './menucomponent/menucomponent';
import { Notfoundcomponent } from './components/notfoundcomponent/notfoundcomponent';
import { Numerodoble } from './components/numerodoble/numerodoble';



@NgModule({
  declarations: [
    App,
    Homecomponent,
    Musicacomponent,
    Cinecomponent,
    Menucomponent,
    Notfoundcomponent,
    Numerodoble
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
