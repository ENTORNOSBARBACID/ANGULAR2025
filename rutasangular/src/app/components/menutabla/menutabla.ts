import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menutabla.html',
  styleUrl: './menutabla.css',
})
export class Menutabla {
  public numeros: number[]=[]
  public numeroR=0

  constructor(){
    for(let i=0; i<11; i++){
      this.numeroR=Math.floor(Math.random()*200)+1
      this.numeros.push(this.numeroR);
    } 
  }
}
