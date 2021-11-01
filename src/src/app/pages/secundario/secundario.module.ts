import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecundarioPageRoutingModule } from './secundario-routing.module';

import { SecundarioPage } from './secundario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecundarioPageRoutingModule
  ],
  declarations: [SecundarioPage]
})
export class SecundarioPageModule {}
