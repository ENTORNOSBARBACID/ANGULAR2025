import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleados } from '../models/Empleados';

@Injectable({
  providedIn: 'root',
})
export class Serviceempleados {
  url=environment.url;

  constructor(private _http:HttpClient){}

  getUser(usu:Usuario):Observable<any>{
    var request="auth/login";

    return this._http.post(this.url+request, usu);
  }
  getInfoUsu():Observable<Empleados>{
    var request="api/empleados/perfilempleado";
    var header=new HttpHeaders().set("Authorization", "bearer "+environment.token);
    return this._http.get<Empleados>(this.url+request, {headers: header});
  }

  getSubordinados():Observable<Empleados[]>{
    var request="api/empleados/subordinados";
    var header=new HttpHeaders().set("Authorization", "bearer "+environment.token);

    return this._http.get<Empleados[]>(this.url+request, {headers: header});
  }

}
