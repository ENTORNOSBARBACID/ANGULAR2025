import { Component } from '@angular/core';
import { Coche } from '../../models/Coches';

@Component({
  selector: 'app-padrecoche',
  standalone: false,
  templateUrl: './padrecoche.html',
  styleUrl: './padrecoche.css',
})
export class Padrecoche {
  public cochesArray:Array<Coche>
  public cocheFav!:Coche;
  constructor(){
    this.cochesArray=[
      new Coche("Nissan", "Pixo",10, 160, false),
      new Coche("Audi", "TT",50, 290, false),
      new Coche("Nissan", "Skyline",30, 230, false),
      new Coche("Bugatti", "Veyron",80, 360, false),
      new Coche("Volkswagen", "Escarabajo",5, 130, false),
    ]
  }
  seleccionarFavorito(event: Coche):void{
    this.cocheFav=event;
  }
}
