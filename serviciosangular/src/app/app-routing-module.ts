import { Personasstandalone } from './components/personasstandalone/personasstandalone';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Personacomponent } from './components/personacomponent/personacomponent';

const routes: Routes = [
  {path:"", component:Personacomponent},
  {path:"standalone", component:Personasstandalone},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
