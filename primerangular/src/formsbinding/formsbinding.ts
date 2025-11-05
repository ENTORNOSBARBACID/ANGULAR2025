import { Component } from "@angular/core";

@Component({
    selector: "forms-binding",
    templateUrl:"./formsbinding.html",
    standalone: false,
})

export class FormsBinding{
    public user: any;
    public mensaje:string;
    public mostrar:boolean;

    constructor(){
        this.mostrar=false
        this.mensaje="";
        this.user={
            nombre:"",
            apellido:"",
            edad:0
        }
    }
    recibirDatos(){
        this.mostrar=true
        this.mensaje="Datos recibidos";
    }

}