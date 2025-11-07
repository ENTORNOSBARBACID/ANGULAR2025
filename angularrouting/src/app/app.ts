import { appRoutingProvider } from './../../../rutasangular/src/app/app.routing';
import { AppRoutingModule } from './../../../serviciosangular/src/app/app-routing-module';
import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularrouting');
}
