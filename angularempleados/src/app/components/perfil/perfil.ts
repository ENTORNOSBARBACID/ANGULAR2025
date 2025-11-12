import { Component, OnInit } from '@angular/core';
import { Serviceempleados } from '../../service/serviceempleados';
import { Empleados } from '../../models/Empleados';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil implements OnInit {
  public empleado!:Empleados;
constructor(private _service: Serviceempleados){}

ngOnInit(): void {
  this._service.getInfoUsu().subscribe(response=>{
    this.empleado=response;
    console.log(this.empleado)
  })
}
}
