import {AfterViewInit, Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import { DocumentInput  } from "../../../models/documentInput";
import {LocalDataSource} from "ng2-smart-table";
import {SearchProductComponent} from "../../components/search-product/search-product.component";

@Component({
  selector: 'input-part',
  templateUrl: './input-part-create.component.html',
  styleUrls: ['./input-part-create.component.scss']
})
export class InputPartCreateComponent implements OnInit, AfterViewInit {
  inputTypes: any;
  products = new LocalDataSource();
  destination: any;
  majorStock: any;
  minorStock: any;
  documentInput = new DocumentInput();
  source: any;
  settings = {
    noDataMessage: "موردی یافت نشد",
    actions: {
      columnTitle: 'عملیات'
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      productCode: {
        title: 'کد محصول',
        type: 'string',
      },
      productName: {
        title: 'کالا',
        type: 'string',
        editor: {
          type: 'custom',
          component: SearchProductComponent,
        },
      },
      value: {
        title: 'مقدار',
        type: 'string',
      },
      number: {
        title: 'واحد',
        type: 'string',
      },
      description: {
        title: 'توضیحات',
        type: 'string',
      }

    },
  };
  constructor(private renderer: Renderer2,
              private restClientService: RestClientService
  ) {

    console.log('document.body', document.body);
    //this.renderer.addClass(document.body['dp-picker-input'], 'modal-open');

  }

  ngOnInit() {
    this.getMajorWarehouses();
    this.restClientService.getService('getInputDocumentTypes', {}).subscribe(
      data => {
        this.inputTypes = data;
      },
      error => {}
    );

    this.restClientService.getService('getSourceAndDestination/Purchase', {}).subscribe(
      data => {
        this.source = data['inputs'];
        this.destination = data['outputs'];
      },
      error => {}
    )
  }

  onDocumentSubmit() {
    this.restClientService.postService('addNewDocument', this.documentInput).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  majorStockSelected(id) {
    this.getMinorWarehouses(id);
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

  getMinorWarehouses(id) {
    this.restClientService.getService('getSubWareHouseByMainWarehouseId/'+id).subscribe(
      data => {
        this.minorStock = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    console.log('form submitted...');
    this.restClientService.postService('AddDocumentAndDetailsTogether', {products: this.products['data'], document: this.documentInput}).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.renderer.selectRootElement('.dp-picker-input'), 'form-control');
  }

}
