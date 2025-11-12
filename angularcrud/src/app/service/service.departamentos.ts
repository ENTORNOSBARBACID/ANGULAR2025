import { Departamento } from './../models/Departamento';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ServiceDepartamentos {
  url=environment.url
    constructor(private _http:HttpClient){}
    getDepartamentos():Observable<Departamento[]>{
      var request="api/departamentos";
      const promise=fetch(this.url+request).then(response=>{
        return response.json()
      })

      return from(promise)
    }


    insertDepartamento(depart:Departamento):Observable<any>{
      var request="api/departamentos";
      return this._http.post(this.url+request, depart);
    }

    getDepartamentoId(id:string):Observable<Departamento>{
      var request="api/departamentos/"+id;
      return this._http.get<Departamento>(this.url+request);
    }

    updateDepartamento(depart:Departamento):Observable<any>{
      var request="api/departamentos";
      let json=JSON.stringify(depart);
      let header=new HttpHeaders().set("Content-type", "application/json");
      
      return this._http.put(this.url+request, json, {headers:header})
      // return this._http.put(this.url+request, depart);

    }

    deleteDepart(id:number):Observable<any>{
      var request="api/departamentos/"+id
      return this._http.delete(this.url+request);
    }
}
