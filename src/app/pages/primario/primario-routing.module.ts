import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimarioPage } from './primario.page';

const routes: Routes = [
  {
    path: '',
    component: PrimarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimarioPageRoutingModule {}
