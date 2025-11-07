import { Injectable } from "@angular/core";
import Global from "../Global"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persona } from "../app/models/Persona";
import { environment } from "../environments/environment.development";

@Injectable()

export class ServicePersona{
    url=environment.url;
    constructor(private _http: HttpClient){

    }
    getPersona():Observable<any>{
        let request="api/personas"
        return this._http.get(this.url+request)
    }
    getPersonaPromesa():Promise<any>{
        let request="api/personas";

        return new Promise((resolve)=>{
            this._http.get(this.url+request).subscribe(response=>{
                resolve(response);
            })
        })
    }
}