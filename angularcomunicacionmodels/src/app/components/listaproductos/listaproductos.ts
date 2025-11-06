import { Component } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-listaproductos',
  standalone: false,
  templateUrl: './listaproductos.html',
  styleUrl: './listaproductos.css',
})
export class Listaproductos {
public producto: Producto = new Producto("Air max 96 ||", "https://tse3.mm.bing.net/th/id/OIP.C4T9ahe6BYxVPIxGSbkI5QHaFM?rs=1&pid=ImgDetMain&o=7&rm=3", 230);
public productos:Producto[]=[];

constructor(){
  this.productos = [
      new Producto(
        "Nike Air Jordan 4",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),	  
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Triple S Balenciaga",
        "https://cdn1.jolicloset.com/imgr/full/2024/05/1321192-1/plastico-zapatillas-balenciaga-triple-s-de-poliuretano-blanco-amarillo.jpg",
        650
      )
    ]
    this.productos.push(this.producto)
}
}
