import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemadepagoPage } from './temadepago.page';

const routes: Routes = [
  {
    path: '',
    component: TemadepagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemadepagoPageRoutingModule {}
