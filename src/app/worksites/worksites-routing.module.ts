import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksitesPage } from './worksites.page';

const routes: Routes = [
  {
    path: '',
    component: WorksitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksitesPageRoutingModule {}
