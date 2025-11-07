import { Component, Input, OnInit } from '@angular/core';
import { Servicepersona } from '../../service/servicepersona';
import { Persona } from '../../../../../serviciosangular/src/app/models/Persona';

@Component({
  selector: 'app-personacomponent',
  imports: [],
  templateUrl: './personacomponent.html',
  styleUrl: './personacomponent.css',
  providers:[Servicepersona]
})
export class Personacomponent implements OnInit {
  
  public personas!: Array<Persona>

  constructor(private _service:Servicepersona){

  }
  ngOnInit(): void {
    // this._service.getPersonas().subscribe(response=> {
    //   this.personas=response
    // })
    // this._service.getPersonasAxios().then(response=>{
    //   this.personas=response.data
    // })
    this._service.getPersonasFetch().subscribe(resolve=>{
      this.personas=resolve
    })
  }
}
