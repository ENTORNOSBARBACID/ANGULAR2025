import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  public cajanumero!:number;
  public cajanombre!:string;
  public cajaloc!:string;

  constructor(private _service:ServiceDepartamentos, private _router:Router){}

  create(){
    var newdept=new Departamento(
      Number(this.cajanumero),
      this.cajanombre,
      this.cajaloc,
    )
    console.log(newdept);
    this._service.insertDepartamento(newdept).subscribe(response=>{
      this._router.navigate(["/"])
    })
  }
}
