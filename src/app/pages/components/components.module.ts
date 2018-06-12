import { NgModule } from '@angular/core';

//import { TreeModule } from 'ng2-tree';

import { ThemeModule } from '../../@theme/theme.module';
import { ComponentsRoutingModule, routedComponents } from './components-routing.module';
import { SearchProductComponent } from './search-product/search-product.component';

@NgModule({
  imports: [
    ThemeModule,
    ComponentsRoutingModule,

  ],
  declarations: [
    ...routedComponents,
    SearchProductComponent,
  ],
  providers: [
  ],
})
export class ComponentsModule { }
