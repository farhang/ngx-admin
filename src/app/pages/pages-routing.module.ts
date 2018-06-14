import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputPartCreateComponent } from './stocking/input-part-create/input-part-create.component';
import {InputPartComponent} from "./stocking/input-part/input-part.component";
import {MainStockCreateComponent} from "./stocking/main-stock-create/main-stock-create.component";
import {SubStockCreateComponent} from "./stocking/sub-stock-create/sub-stock-create.component";
import {PersonnelComponent} from "./personel/personel/personnel.component";
import {PersonnelGroupComponent} from "./personel/personnel-group/personnel-group.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'stocking/inputParts',
      component: InputPartComponent
    },
    {
      path: 'stocking/inputPartsCreate',
      component: InputPartCreateComponent
    },
    {
      path: 'stocking/mainStockCreate',
      component: MainStockCreateComponent
    },
    {
      path: 'stocking/subStockCreate',
      component: SubStockCreateComponent
    },
    {
      path: 'personnel/create',
      component: PersonnelComponent
    },
    {
      path: 'personnelGroup/create',
      component: PersonnelGroupComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
