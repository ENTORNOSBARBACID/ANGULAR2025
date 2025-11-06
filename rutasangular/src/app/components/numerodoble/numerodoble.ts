import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.html',
  styleUrl: './numerodoble.css',
})
export class Numerodoble implements OnInit {
  public numero!:number;
  public num:number;
  constructor(private _activatedRoute:ActivatedRoute,private _router: Router){
    this.num=0
    

  }

  goToHome():void{
    this._router.navigate(['/']);
  }

  redirect(): void {
  // Asegurémonos de que 'num' sea un entero para la URL
  this.num = Math.floor(Math.random() * 100);
  
  // El número va DENTRO del array
  this._router.navigate(['/numerodoble', this.num]); 
}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros:Params)=>{
      //Dentro de params es donde recibimos los parametros por su name y la sintaxis
      //para recuperarlo es params['PARAMETER NAME']
      //En este ejemplo, el parametro es opcional

      if(parametros['num'] != null){
        //El parametro simepre son strings
        this.numero=Number(parametros['num']);
      }

    })
  }
}
