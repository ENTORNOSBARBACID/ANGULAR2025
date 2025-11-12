import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit{
  public cajanumero!:number;
  public cajanombre!:string;
  public cajaloc!:string;
  public id!:string;
  public departamento!:Departamento

  constructor(private _service:ServiceDepartamentos, private _router:Router, private activated:ActivatedRoute){
 
  }

  ngOnInit(): void {
    this.activated.params.subscribe((parametros:Params)=>{
      this.id=parametros["num"];
    })
    console.log(this.id)

    this._service.getDepartamentoId(this.id).subscribe(response=>{
      this.departamento=response
      this.cajanumero=this.departamento.numero
      this.cajanombre=this.departamento.nombre
      this.cajaloc=this.departamento.localidad
    })



  }

  update(){
    var newdept=new Departamento(
      Number(this.cajanumero),
      this.cajanombre,
      this.cajaloc,
    )
    this._service.updateDepartamento(newdept).subscribe(response=>{
      console.log(response)
      this._router.navigate(["/"]);
    });
  }
}

