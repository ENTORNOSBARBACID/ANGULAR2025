import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Serviceempleados } from '../../service/serviceempleados';
import { Usuario } from '../../models/Usuario';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
public name!:string;
public password!:string;
@Output() updateToken: EventEmitter<any> = new EventEmitter()
constructor(private _service:Serviceempleados){}
getUser() {
  var tokenUsu="";
  var user=new Usuario(this.name, this.password);
  this._service.getUser(user).subscribe(response=>{
    tokenUsu=response.response;
    environment.token=tokenUsu
    this.updateToken.emit(tokenUsu);
  })
}
}
