import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { Departamento } from '../../models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  public cajanumero!:number;
  public cajanombre!:string;
  public cajaloc!:string;

  constructor(private _service:ServiceDepartamentos, private _router:Router){}

  create(){
    var newdept=new Departamento(
      Number(this.cajanumero),
      this.cajanombre,
      this.cajaloc,
    )
    console.log(newdept);
    this._service.insertDepartamento(newdept).subscribe({
    // 4. El console.log va AQUÍ (en 'next')
    next: (response) => {
      console.log("Insertado correctamente", response);
      // Aquí también puedes redirigir al usuario, limpiar el form, etc.
    },
    // 5. Es vital manejar los errores
    error: (err) => {
      console.error("Error al insertar:", err);
    }
  });;
  this._router.navigate(["/"])
  }
}
