import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Homecomponent } from "./components/homecomponent/homecomponent";
import { Musicacomponent } from "./components/musicacomponent/musicacomponent";
import { Cinecomponent } from "./components/cinecomponent/cinecomponent";
import { Notfoundcomponent } from "./components/notfoundcomponent/notfoundcomponent";
import { Numerodoble } from "./components/numerodoble/numerodoble";
import { Tablamultiplicarrouting } from "./components/tablamultiplicarrouting/tablamultiplicarrouting";

const appRoutes: Routes =[
    {path : "", component: Homecomponent},
    {path : "musica", component: Musicacomponent},
    {path : "cine", component: Cinecomponent},
    {path : "numerodoble/:num", component: Numerodoble},
    {path : "numerodoble", component: Numerodoble},
    {path : "tabla/:num", component: Tablamultiplicarrouting},
    {path : "**", component: Notfoundcomponent},
]

//Desde esta clase debemos exportar el array de routes como provider
export const appRoutingProvider : any[] = [];
//Rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);