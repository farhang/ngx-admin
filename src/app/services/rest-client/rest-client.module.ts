import { NgModule } from '@angular/core';
import { RestClientService } from 'app/services/rest-client/rest-client.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [RestClientService],
})
export class RestClientModule { }
