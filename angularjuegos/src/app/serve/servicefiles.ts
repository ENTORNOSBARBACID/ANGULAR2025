import { Injectable } from '@angular/core';
import { Files } from '../models/files';
import { Observable } from 'rxjs';
import Global from '../../Global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Servicefiles {
  url=Global.url
  constructor(private _http:HttpClient){}
  
  postFile(file:Files):Observable<any>{

    var request="api/testingfiles";
    return this._http.post(this.url+request, file)
  }
}
