import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
  providers:[ServiceDepartamentos]
})
export class Details implements OnInit{

  public depart!:Departamento;
  public id!:string;
  public nombre!:string;
  public localizacion!:string

  constructor(private _server:ServiceDepartamentos, private _activate:ActivatedRoute){}

  ngOnInit(): void {
    this._activate.params.subscribe((parametros:Params)=>{
        this.id=parametros["id"]
    })

    this._server.getDepartamentoId(this.id).subscribe(response=>{
      this.depart=response;
      this.nombre=this.depart.nombre;
      this.localizacion=this.depart.localidad;
    })
  }
}
