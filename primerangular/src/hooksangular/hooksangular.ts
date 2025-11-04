import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector:"hooks-angular",
    standalone:false,
    templateUrl:"hooksangular.html"
})
export default class HooksAngular implements OnInit{

    constructor(){
        console.log("Constructor: Primer metodo de inicio del component")
        
    }
    ngOnInit():void {
        console.log("ngOnInit: Entro desde el metodo de OnInit")
    }
    ngDoCheck():void{
        console.log("ngDoCheck: Ahora entro desde el doCheck, despues del resto")
    }
}