import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FotografiasComponent } from './fotografias/fotografias.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Fotografias
  {
    path: 'fotografias',
    component: FotografiasComponent
  },
  //Passarinhos
  {
    path: 'compras',
    component: ComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
