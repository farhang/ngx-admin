import {AfterViewInit, Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import { DocumentInput  } from "../../../models/documentInput";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'input-part',
  templateUrl: './input-part.component.html',
  styleUrls: ['./input-part.component.scss']
})
export class InputPartComponent implements OnInit {
  settings = {
    defaultStyle: false,
    actions: false,
    /*actions: {
      /!*custom: [{ name: 'Edit', title: `<i  class="fa fa-edit"></i>` },
        { name: 'Activate', title: `<i class="fa fa-toggle-on"></i>` },
        { name: 'Deactivate', title: `<i  class="fa fa-toggle-off"></i>` }
      ],
*!/
    },*/
    columns: {
      _id: {
        title: 'شماره سند',
        type: 'string',
      },
      type: {
        title: 'نوع',
        filter: { type: 'list', config: { selectText: 'نوع', list: [{ value: 'ورود', title: 'ورود' },{ value: 'خروج', title: 'خروج' }], }, },
        type: 'string',
      },
      kind: {
        title: 'نوع ورودی یا خروجی',
        type: 'string',
      },
      description: {
        title: 'توضیحات',
        type: 'string',
      },
      warehouse: {
        title: 'مبدا',
        type: 'string',
      },
      person: {
        title: 'مقصد',
        type: 'string',
      }

    },
  };

  source: LocalDataSource = new LocalDataSource();
  private results: any[];
  constructor(
    private restClientService: RestClientService
  ) {
    this.restClientService.getService('GetDocuments').subscribe(
      (data:any[]) => {
        this.source.load(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {

  }

  onDeleteCommand(id:string ){

    //this.service.deleteUserById(id).subscribe((data)=>{console.log(data)},(error)=>{console.log('err')}) ;
  }

  onCustom(event) {
    console.log(`Custom event '${event.action}' fired on row №: ${event.data}`)
  }

  consoleLog() {
    console.log('action works.');
  }
  onSaveCommand(data:any ){

    //this.service.updateUserById(data).subscribe((data)=>{console.log(data)},(error)=>{console.log('err')}) ;
  }

  onDeleteConfirm(event): void {

    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(this.onDeleteCommand(event.data._id));
    } else {
      event.confirm.reject();
    }
  }
  onSaveConfirm(event):void
  {
    if (window.confirm('Are you sure you want to Update?')) {
      event.confirm.resolve(this.onSaveCommand(event.newData));
    } else {
      event.confirm.reject();
    }

  }

  onCreateConfirm(event):void
  {
    if (window.confirm('Are you sure you want to Add New Item?')) {
      event.confirm.resolve(this.onAddCommand(event.newData));
    } else {
      event.confirm.reject();
    }
  }

  onAddCommand(data:any ){
    //this.service.addNewUser(data).subscribe((data)=>{console.log(data)},(error)=>{console.log('err')}) ;
  }

}
