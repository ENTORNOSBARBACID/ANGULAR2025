import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../primercomponent/primercomponent';
import HooksAngular from '../hooksangular/hooksangular';

@NgModule({
  declarations: [
    App, PrimerComponent, HooksAngular
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
