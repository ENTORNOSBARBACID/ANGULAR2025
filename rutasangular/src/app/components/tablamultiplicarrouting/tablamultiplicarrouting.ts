import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.html',
  styleUrl: './tablamultiplicarrouting.css',
})
export class Tablamultiplicarrouting implements OnInit{

  public numero!: number;
  public diez=[1,2,3,4,5,6,7,8,9,10]

  constructor(private _activeRoute: ActivatedRoute, private _route:Router){

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if(parametros["num"]){
        this.numero=parametros["num"];
      }
    })
  }

}
