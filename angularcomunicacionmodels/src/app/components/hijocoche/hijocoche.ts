  import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
  import { Coche } from '../../models/Coches';

  @Component({
    selector: 'app-hijocoche',
    standalone: false,
    templateUrl: './hijocoche.html',
    styleUrl: './hijocoche.css',
  })
  export class Hijocoche{

  @Input() coche!:Coche;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter()
  public mensaje:string;
  public vmax!:number;

  constructor(){
    this.mensaje="";
    
  }



  comprobarEstado():boolean{
    if(!this.coche.estado){
      this.mensaje="APAGADO";
      this.vmax=this.coche.velocidad;
      this.coche.velocidad=0;
      return false;
    }else{
      this.mensaje="ENCENDIDO"
      return true;
    }
  }

  encenderCoche():void{
    this.coche.estado=!this.coche.estado
    this.comprobarEstado()
  }
  acelerarCoche():void{
    if(this.coche.estado){
      if(this.coche.velocidad < this.vmax){
        this.coche.velocidad+=this.coche.aceleracion
      }else{
        alert("El motor esta a dos revoluciones mas de fallecer")
      }
    }
    else{
      alert("Colega, enciende el coche")
    }
  }

  seleccion():void{
    this.seleccionarFavorito.emit(this.coche)
  }
}
