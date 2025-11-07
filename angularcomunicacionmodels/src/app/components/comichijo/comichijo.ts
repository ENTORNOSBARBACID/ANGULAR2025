import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/Comic';

@Component({
  selector: 'app-comichijo',
  standalone: false,
  templateUrl: './comichijo.html',
  styleUrl: './comichijo.css',
})
export class Comichijo {
@Input() comic!: Comic;
@Output() favorito: EventEmitter<any> = new EventEmitter()
@Output() eliminar: EventEmitter<any> = new EventEmitter()

constructor(){

}
seleccionarFavorito():void
{
  this.favorito.emit(this.comic);
}
eliminarComic():void{
  this.eliminar.emit(this.comic);
}
}
