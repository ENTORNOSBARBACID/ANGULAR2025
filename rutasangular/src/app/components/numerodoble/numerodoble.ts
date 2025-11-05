import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.html',
  styleUrl: './numerodoble.css',
})
export class Numerodoble implements OnInit {

  constructor(_activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    // this._activatedRoute.params.subscribe((parametros:Params)=>{

    // })
  }
}
