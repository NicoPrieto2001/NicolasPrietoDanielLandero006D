import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerciarioPage } from './terciario.page';

const routes: Routes = [
  {
    path: '',
    component: TerciarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerciarioPageRoutingModule {}
