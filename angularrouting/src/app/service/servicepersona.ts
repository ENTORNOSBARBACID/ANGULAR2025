import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class Servicepersona {
    url=environment.url;

    constructor(private _http: HttpClient){

    }
    getPersonas():Observable<any>{
      let request="api/personas";
      return this._http.get(this.url+request);
       
    }
    getPersonasAxios():Promise<any>{
      let request="api/personas";
      return axios.get(this.url+request)
    }
    getPersonasFetch():Observable<any>{
      let request="api/personas";

    const promise = fetch(this.url + request).then(response => {
        return response.json();
      });

    return from(promise);      
    }
}
