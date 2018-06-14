import { Component, OnInit } from '@angular/core';
import {Toast, ToasterService} from "angular2-toaster";
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import {Personnel} from "../../../models/Personnel";

@Component({
  selector: 'personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  personnel = new Personnel();
  constructor(
    private restClientService: RestClientService,
    private toasterService: ToasterService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.restClientService.postService('AddNewPersonnel', this.personnel).subscribe(
      data => {
        const toast: Toast = {
          type: 'DEFAULT',
          body: 'پرسنل با موفقیت ساخته شد.',
        };
        this.toasterService.popAsync(toast);
      },
      error => {
        const toast: Toast = {
          type: 'ERROR',
          title: 'ساخت انبار',
          body: 'ساختن پرسنل با مشکل مواجه شده است.',
        };
        console.log(error);
      }
    )
  }
}
