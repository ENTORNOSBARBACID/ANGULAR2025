import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  standalone: false,
  templateUrl: './tablamultiplicar.html',
  styleUrl: './tablamultiplicar.css',
})
export class Tablamultiplicar {
  @ViewChild("cajanum") numero: ElementRef
  public mostrar=false;
  public diez:any;
  constructor(){
    this.diez=[1,2,3,4,5,6,7,8,9,10];
    this.numero=new ElementRef(1)
  }
  generarTabla(){
    this.mostrar=true
  }
}
