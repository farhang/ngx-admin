import { Component, OnInit } from '@angular/core';
import { Warehouse} from "../../../models/warehouse";
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import { Toast, ToasterConfig, ToasterService, BodyOutputType } from "angular2-toaster";

import 'style-loader!angular2-toaster/toaster.css';
@Component({
  selector: 'main-stock-create',
  templateUrl: './main-stock-create.component.html',
  styleUrls: ['./main-stock-create.component.scss'],
})
export class MainStockCreateComponent implements OnInit {
  warehouse = new Warehouse();
  config: ToasterConfig;
  constructor(
    private restClientService: RestClientService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    /*this.config = new ToasterConfig({
      positionClass: '',
      timeout: 3000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'fade',
      limit: 5,
    });*/
  }

  onSubmit() {
    this.restClientService.postService('AddNewMainWareHouse', this.warehouse).subscribe(
      data => {
        const toast: Toast = {
          type: 'DEFAULT',
          body: 'انبار با موفقیت ساخته شد.',
        };
        this.toasterService.popAsync(toast);
      },
      error => {
        const toast: Toast = {
          type: 'ERROR',
          title: 'ساخت انبار',
          body: 'ساختن انبار با مشکل مواجه شده است.',
        };
        console.log(error);
      }
    )
  }

  onCancel() {

  }
}
