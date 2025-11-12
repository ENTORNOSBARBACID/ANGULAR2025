import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Perfil } from './components/perfil/perfil';
import { Subordinados } from './components/subordinados/subordinados';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"perfil", component:Perfil},
    {path:"subordinados", component:Subordinados},
];
