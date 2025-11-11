import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../../service/service.plantilla';
import { Plantilla } from '../../models/Plantilla';

@Component({
  selector: 'app-platillafuncionsimple',
  standalone: false,
  templateUrl: './platillafuncionsimple.html',
  styleUrl: './platillafuncionsimple.css',
})
export class Platillafuncionsimple implements OnInit{

  public funciones: string[]=[]
   @ViewChild("funcion") funcion!: ElementRef
   public trabajo!:string
   public plantilla:Plantilla[]=[]
  constructor(private _service:ServicePlantilla){

  }
  ngOnInit(): void {
    this._service.getPlanitllaFunciones().subscribe(response=>{
      this.funciones=response;
      console.log(response)
    })
  }
  verPlantilla(){
    this.trabajo=this.funcion.nativeElement.value
    this._service.getPlantilla(this.trabajo).subscribe(response=>{
      this.plantilla=response
      console.log(this.plantilla)
    })
    
  }


}
