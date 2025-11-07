import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Personacomponent } from './components/personacomponent/personacomponent';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"persona", component:Personacomponent},
];
