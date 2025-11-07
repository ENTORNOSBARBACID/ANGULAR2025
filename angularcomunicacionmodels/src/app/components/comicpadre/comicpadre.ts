import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/serviceComics';
import { empty } from 'rxjs';

@Component({
  selector: 'app-comicpadre',
  standalone: false,
  templateUrl: './comicpadre.html',
  styleUrl: './comicpadre.css',
  // providers:[ServiceComics]
})
export class Comicpadre implements OnInit {
  public comics!: Array<Comic>
  public favorito: Comic | null = null
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  @ViewChild("cajadesc") cajadesc!: ElementRef

  constructor(private service: ServiceComics){

  }

  ngOnInit(): void {
    this.comics=this.service.getComics();
  }

  seleccionarFavorito(data: Comic):void{
    this.favorito=data;
  }
  crearComic():void{
    let comic= new Comic(
      this.cajanombre.nativeElement.value,
      this.cajaimagen.nativeElement.value,
      this.cajadesc.nativeElement.value
    )
    this.comics.push(comic);
  }
  eliminarComic(data: Comic):void{
    let pos=this.comics.indexOf(data);

    if(this.favorito){
      let posFav=this.comics.indexOf(this.favorito);
      if(pos==posFav){
        this.favorito=null
      }
    }

    this.comics.splice(pos, 1);


  }
}
