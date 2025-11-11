import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { Departamento } from '../../models/Departamento';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  imports: [RouterLink],
  templateUrl: './departamentos.html',
  styleUrl: './departamentos.css',
  providers:[ServiceDepartamentos]
})
export class Departamentos implements OnInit{

  public departamentos:Departamento[]=[]

  constructor(private _service:ServiceDepartamentos){}

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response=>{
      this.departamentos=response;
      console.log(this.departamentos)
    })
  }

}
