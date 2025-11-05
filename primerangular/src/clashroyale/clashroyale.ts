import { Component } from "@angular/core";

@Component({
    selector:"clash-royale",
    templateUrl:"./clashroyale.html", 
    styleUrl:"./clashroyale.css",
    standalone:false,
})

export class ClashRoyale{
    objetos:Array<string>;
    numeros:Array<number>
    constructor(){
        this.objetos=["Caballero", "Mini PEKKA", "Princesa", "Mago", "PEKKA"]
        this.numeros=[1,2,3,4,5,6,7,8,9,10]

    }
}