import { Files } from './../../models/files';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Servicefiles } from '../../serve/servicefiles';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[Servicefiles]
})
export class Home {
public nombre!:string;
public string64!:string;
constructor(private _service:Servicefiles){}
verArchivo(event:any){
  const file = event.target.files[0]
  this.nombre=file.name;
  // this.string64=btoa(this.archivo)
  // console.log(this.string64)
  console.log("nombre: "+this.nombre);


  const reader = new FileReader();

reader.onload = () => {
  this.string64 = (reader.result as string).split(",")[1];
  console.log("¡Lectura completada!", this.string64); 
};
reader.readAsDataURL(file);
console.log("Iniciando lectura del archivo...");

  
}
publish(){
  
  var file=new Files(this.nombre, this.string64);
  this._service.postFile(file).subscribe(response=>{
    console.log("exito");
  })

}
}
