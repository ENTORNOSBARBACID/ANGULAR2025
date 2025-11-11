import { Injectable } from '@angular/core';
import Global from '../Global';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Plantilla} from "../app/models/Plantilla"

@Injectable({
  providedIn: 'root',
})
export class ServicePlantilla {
  url=Global.urlPlantilla;
  constructor(private _http:HttpClient){

  }

  getPlanitllaFunciones(): Observable<string[]>{
    var request="api/plantilla/funciones";
    //Dentro de http.get() podemos indicar el tipo de objeto a devolver
    //mediante DIAMONDS <T>
    return this._http.get<Array<string>>(this.url+request);
  }

  getPlantilla(funcion:string):Observable<any>{
    var request="api/Plantilla/PlantillaFuncion/"+funcion;
    return this._http.get(this.url+request);
  }

  getMultipleFunciones(funciones:Array<string>):Observable<Plantilla[]>{
    var request="api/plantilla/plantillafunciones";
    var data="?"
    for(var i of funciones){
      data+="funcion="+i+"&";
    }
    data=data.slice(0, -1);
    console.log("data: "+data)
    return this._http.get<Plantilla[]>(this.url+request+data);

  }
  
}
