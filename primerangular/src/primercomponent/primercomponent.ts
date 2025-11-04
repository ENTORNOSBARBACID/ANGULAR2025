import { Component } from "@angular/core";

@Component({
    //Debemos declarar el nombre del component mediante su selector en html
    //En angular los selectores llevan guion
    selector: "primer-component",
    standalone: false,
    //por ahora no voy a tener html separados, podemos incluirlo dentro del componente
    templateUrl: "./primercomponent.html",
    styleUrls:["./primercomponent.css"]
    
})
//Cada componente siempre tiene que tener una clase asociada en su ts
//Dicho nombre de clase si lleva mayusculas se declara dentro de app-module.ts
export class PrimerComponent{
    //Aqui es donde se declaran las variables, dichas variables deben tener un tipado siempre(TypeScript)
    public titulo: string;
    public descripcion: string;
    public year: number;
    //En angular, al igual que en react, tenemos un constructor
    //En dicho constructor sera donde inicializaremos los elementos de mi clase
    constructor(){
        //Para acceder a objetos de la clase, utilizamos la palabra this
        this.titulo="Hoy es martes";
        this.descripcion="Quiero salir de clase yadeya";
        this.year=2025;
    }
}