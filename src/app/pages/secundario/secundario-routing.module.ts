import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecundarioPage } from './secundario.page';

const routes: Routes = [
  {
    path: '',
    component: SecundarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecundarioPageRoutingModule {}
