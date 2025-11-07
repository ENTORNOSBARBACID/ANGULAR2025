import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Listaproductos } from "./components/listaproductos/listaproductos";
import { Padrecoche } from "./components/padrecoche/padrecoche";
import { Comicpadre } from "./components/comicpadre/comicpadre";

const appRoutes: Routes =[
    {path : "", component: Listaproductos},
    {path : "coche", component: Padrecoche},
    {path : "comics", component: Comicpadre},
]

//Desde esta clase debemos exportar el array de routes como provider
export const appRoutingProvider : any[] = [];
//Rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);