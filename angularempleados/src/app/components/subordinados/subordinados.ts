import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../models/Empleados';
import { Serviceempleados } from '../../service/serviceempleados';

@Component({
  selector: 'app-subordinados',
  imports: [],
  templateUrl: './subordinados.html',
  styleUrl: './subordinados.css',
})
export class Subordinados implements OnInit{
  public subordinados:Empleados[]=[]
  constructor(private _service: Serviceempleados){}

  ngOnInit(): void {
    this._service.getSubordinados().subscribe(response=>{
      this.subordinados=response;
      console.log(this.subordinados)
    })
  }
} 
