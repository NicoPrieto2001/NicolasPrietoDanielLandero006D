import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemadepagoPageRoutingModule } from './temadepago-routing.module';

import { TemadepagoPage } from './temadepago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemadepagoPageRoutingModule
  ],
  declarations: [TemadepagoPage]
})
export class TemadepagoPageModule {}
