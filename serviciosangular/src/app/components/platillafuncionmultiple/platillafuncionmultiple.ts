import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/Plantilla';
import { ServicePlantilla } from '../../../service/service.plantilla';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-platillafuncionmultiple',
  templateUrl: './platillafuncionmultiple.html',
  styleUrl: './platillafuncionmultiple.css',
  providers: [ServicePlantilla],
  imports: [FormsModule]
})
export class Platillafuncionmultiple implements OnInit{
public funciones: string[]=[]
  public funcion!:Array<string>
public trabajos:string[]=[]
   public plantilla:Plantilla[]=[]
  constructor(private _service: ServicePlantilla){

  }
  ngOnInit(): void {
    this._service.getPlanitllaFunciones().subscribe(response=>{
      this.funciones=response
    })
  }
  verFunciones(){
    this._service.getMultipleFunciones(this.funcion).subscribe(response=>{
      this.plantilla=response
      console.log(response)
    })
  }
  }

