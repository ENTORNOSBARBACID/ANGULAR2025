import { Routes } from '@angular/router';
import { Departamentos } from './components/departamentos/departamentos';
import { Create } from './components/create/create';
import { Update } from './components/update/update';

export const routes: Routes = [
    {path: "", component:Departamentos},
    {path: "create", component:Create},
    {path: "update/:num", component:Update},
];
