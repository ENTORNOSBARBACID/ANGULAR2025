import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/Equipos';
import { Servicefutbol } from '../../service/servicefutbol';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, FormsModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit{
  public equipos:Equipo[]=[]
  public nombre!:string;

  constructor(private _service:Servicefutbol, private _router: Router){}

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response=>{
      this.equipos=response;
    }
    )
  }
  buscarJugador(){
    this._router.navigate(["/", "jugadores", this.nombre])
  }

}
