import { Component } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";

@Component({
    selector:"forms-ref",
    templateUrl:"./formsref.html",
    standalone: false,
})
export class FormsRef{
    public mostrar:boolean;
    public suma:number;
    @ViewChild("cajanum1") cajaNumero1Ref!: ElementRef
    @ViewChild("cajanum2") cajaNumero2Ref!: ElementRef
    
    constructor(){

        this.mostrar=false;
        this.suma=0
        // this.cajaNumero1Ref=new ElementRef(0);
        // this.cajaNumero2Ref=new ElementRef(0);
    }
    sumar(){
        this.mostrar=true;
        this.suma=Number(this.cajaNumero1Ref.nativeElement.value)+Number(this.cajaNumero2Ref.nativeElement.value)   ;
    }
}