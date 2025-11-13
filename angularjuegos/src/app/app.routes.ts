import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { Equipo } from './models/Equipos';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"equipos/:id", component:EquiposComponent},
    {path:"jugadores/:name", component:JugadoresComponent},
];
