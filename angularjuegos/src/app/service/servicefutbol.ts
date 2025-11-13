import { Injectable } from '@angular/core';
import Global from '../../Global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../models/Equipos';
import { Jugador } from '../models/Jugadores';

@Injectable({
  providedIn: 'root',
})
export class Servicefutbol {
  url=Global.urlFutbol;

  constructor(private _http:HttpClient){}
  
  getEquipos():Observable<Equipo[]>{
    var request="api/equipos";
    return this._http.get<Equipo[]>(this.url+request);
  }
  getEquipoId(id:string):Observable<Equipo>{
    var request="api/equipos/"+id;
    return this._http.get<Equipo>(this.url+request);
  }
  getJugadores(id:string):Observable<Jugador[]>{
    var request="api/jugadores/jugadoresequipos/"+id;
    return this._http.get<Jugador[]>(this.url+request);
  }
  getJugadoresNombre(nombre:string):Observable<Jugador[]>{
    var request="api/jugadores/buscarjugadores/"+nombre;
    return this._http.get<Jugador[]>(this.url+request);
  }


}
