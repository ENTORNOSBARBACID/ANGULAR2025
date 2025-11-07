import { Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../../service/servicePersona';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personacomponent',
  standalone: false,
  templateUrl: './personacomponent.html',
  styleUrl: './personacomponent.css',
})
export class Personacomponent implements OnInit {
  public personas!:Array<Persona>
constructor(private _service:ServicePersona){

}
ngOnInit(): void {
  // this._service.getPersona().subscribe(response=>{
  //   this.personas=response
  // })
  this._service.getPersonaPromesa().then(response=>{
    this.personas=response
  })
}
}
