import { Component, OnInit } from '@angular/core';
import {subWarehouse, Warehouse} from "../../../models/warehouse";
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import { Toast, ToasterConfig, ToasterService, BodyOutputType } from "angular2-toaster";

import 'style-loader!angular2-toaster/toaster.css';
@Component({
  selector: 'main-stock-create',
  templateUrl: './sub-stock-create.component.html',
  styleUrls: ['./sub-stock-create.component.scss'],
})



export class SubStockCreateComponent implements OnInit {
  warehouse = new subWarehouse();
  config: ToasterConfig;
  majorStock: any;
  constructor(
    private restClientService: RestClientService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.getMajorWarehouses();
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

  getMajorWarehouses() {
    this.restClientService.getService('getWarehouses').subscribe(
      data => {
        this.majorStock = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.warehouse);
    this.restClientService.postService('AddNewSubWareHouse', this.warehouse).subscribe(
      data => {
        const toast: Toast = {
          type: 'DEFAULT',
          body: 'انبار فرعی با موفقیت ساخته شد.',
        };
        this.toasterService.popAsync(toast);
      },
      error => {
        const toast: Toast = {
          type: 'error',
          title: 'ساخت انبار',
          body: 'ساختن انبار فرعی با مشکل مواجه شده است.',
        };
        this.toasterService.popAsync(toast);
      }
    )
  }

  onCancel() {

  }
}
