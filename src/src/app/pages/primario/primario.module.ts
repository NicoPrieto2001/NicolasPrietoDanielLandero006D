import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimarioPageRoutingModule } from './primario-routing.module';

import { PrimarioPage } from './primario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimarioPageRoutingModule
  ],
  declarations: [PrimarioPage]
})
export class PrimarioPageModule {}
