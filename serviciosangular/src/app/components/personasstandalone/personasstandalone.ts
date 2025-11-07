import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicePersona } from '../../../service/servicePersona';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.html',
  styleUrl: './personasstandalone.css',
  providers: [ServicePersona]
})
export class Personasstandalone{

  public personas!:Array<Persona>

  constructor(private _service: ServicePersona){
    this.personas=Array<Persona>();
    let p=new Persona(10, "Chases", "Camellon", 12)
    let p2=new Persona(20, "Alonso", "Cobayon", 34)
    let p3=new Persona(30, "Pinilla", "Palomon", 54)

    this.personas.push(p);
    this.personas.push(p2);
    this.personas.push(p3);
  }
//   ngOnInit(): void {
//   // this._service.getPersona().subscribe(response=>{
//   //   this.personas=response
//   // })
//   this._service.getPersonaPromesa().then(response=>{
//     this.personas=response
//   })
// }
}
