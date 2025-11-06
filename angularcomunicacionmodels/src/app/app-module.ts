import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { appRoutingProvider, routing } from './app.routing';
import { Menucomponent } from './components/menucomponent/menucomponent';
import { Padrecoche } from './components/padrecoche/padrecoche';
import { Hijocoche } from './components/hijocoche/hijocoche';
import { Comicpadre } from './components/comicpadre/comicpadre';
import { Comichijo } from './components/comichijo/comichijo';

@NgModule({
  declarations: [
    App,
    Listaproductos,
    Menucomponent,
    Padrecoche,
    Hijocoche,
    Comicpadre,
    Comichijo
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
