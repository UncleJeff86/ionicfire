import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorksitesPageRoutingModule } from './worksites-routing.module';

import { WorksitesPage } from './worksites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorksitesPageRoutingModule
  ],
  declarations: [WorksitesPage]
})
export class WorksitesPageModule {}
