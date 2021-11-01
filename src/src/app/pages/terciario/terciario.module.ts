import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerciarioPageRoutingModule } from './terciario-routing.module';

import { TerciarioPage } from './terciario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerciarioPageRoutingModule
  ],
  declarations: [TerciarioPage]
})
export class TerciarioPageModule {}
