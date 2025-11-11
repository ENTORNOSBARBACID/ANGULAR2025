import { Personasstandalone } from './components/personasstandalone/personasstandalone';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Personacomponent } from './components/personacomponent/personacomponent';
import { Platillafuncionsimple } from './components/platillafuncionsimple/platillafuncionsimple';
import { Platillafuncionmultiple } from './components/platillafuncionmultiple/platillafuncionmultiple';

const routes: Routes = [
  {path:"", component:Personacomponent},
  {path:"standalone", component:Personasstandalone},
  {path:"plantilla", component:Platillafuncionsimple},
  {path:"plantillamultiple", component:Platillafuncionmultiple},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
