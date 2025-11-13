import { Equipo } from './../../models/Equipos';
import { Component, OnInit } from '@angular/core';
import { DatosEquipo } from '../../models/DatosEquipos';
import { HttpClient } from '@angular/common/http';
import { Servicefutbol } from '../../service/servicefutbol';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-equipos-component',
  imports: [],
  templateUrl: './equipos-component.html',
  styleUrl: './equipos-component.css',
})
export class EquiposComponent implements OnInit{
public id!:string;
public data!:DatosEquipo;

constructor(private _service:Servicefutbol, private _activate:ActivatedRoute){}

ngOnInit(): void {

  this._activate.params.subscribe((parametro:Params)=>{
    this.id=parametro["id"];
    var llamadaEquipo=this._service.getEquipoId(this.id);
    var llamadaJugador=this._service.getJugadores(this.id);
    forkJoin([llamadaEquipo, llamadaJugador]).subscribe(response=>{
      this.data=new DatosEquipo(response[0], response[1])
    })
    
  })

}
}
