import {AfterViewInit, Component, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RestClientService} from "../../../services/rest-client/rest-client.service";
import { DocumentInput  } from "../../../models/documentInput";

@Component({
  selector: 'input-part',
  templateUrl: './input-part.component.html',
  styleUrls: ['./input-part.component.scss']
})
export class InputPartComponent implements OnInit, AfterViewInit {
  inputTypes: any;
  source: any;
  destination: any;
  documentInput = new DocumentInput();
  constructor(private renderer: Renderer2,
    private restClientService: RestClientService
  ) {
    console.log('document.body', document.body);
    //this.renderer.addClass(document.body['dp-picker-input'], 'modal-open');

  }

  ngOnInit() {
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

  onProductSubmit() {
    console.log('product submit');
  }

  ngAfterViewInit(){
    this.renderer.addClass(this.renderer.selectRootElement('.dp-picker-input'), 'form-control');
  }

}
