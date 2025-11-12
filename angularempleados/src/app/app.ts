import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { environment } from '../environments/environment.development';
import { Menu } from './components/menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('angularempleados');
  public token!:string;
  constructor(){
    this.token=environment.token;
  }
  updateToken(tokenUsu:string){
    this.token=tokenUsu;
  }
}
