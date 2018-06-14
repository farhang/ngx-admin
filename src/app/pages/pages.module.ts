import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { InputPartCreateComponent } from "./stocking/input-part-create/input-part-create.component";
import { InputPartComponent } from "./stocking/input-part/input-part.component";
import { MainStockCreateComponent } from "./stocking/main-stock-create/main-stock-create.component";
import {SubStockCreateComponent} from "./stocking/sub-stock-create/sub-stock-create.component";

const PAGES_COMPONENTS = [
  PagesComponent,
  InputPartCreateComponent,
  InputPartComponent,
  MainStockCreateComponent,
  SubStockCreateComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
