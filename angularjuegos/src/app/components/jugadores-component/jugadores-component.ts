import { Component, OnInit } from '@angular/core';
import { Servicefutbol } from '../../service/servicefutbol';
import { ActivatedRoute, Params } from '@angular/router';
import { Jugador } from '../../models/Jugadores';

@Component({
  selector: 'app-jugadores-component',
  imports: [],
  templateUrl: './jugadores-component.html',
  styleUrl: './jugadores-component.css',
})
export class JugadoresComponent implements OnInit{

  public name!:string
  public jugadores!:Jugador[]
  constructor(private _service:Servicefutbol, private _activate: ActivatedRoute){}

  ngOnInit(): void {
    this._activate.params.subscribe((param:Params)=>{
      this.name=param["name"];
      this._service.getJugadoresNombre(this.name).subscribe(response=>{
        this.jugadores=response;
      })
    })
  }
}
