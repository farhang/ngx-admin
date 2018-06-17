import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DefaultEditor} from "ng2-smart-table";
import {RestClientService} from "../../../services/rest-client/rest-client.service";

@Component({
  selector: 'search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent  extends DefaultEditor implements AfterViewInit {
  products: any;
  loading = false;
  visibleList = false;

  @ViewChild('productText') productText: ElementRef;

  constructor(private restClientService: RestClientService) {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.newValue !== '') {
      this.productText.nativeElement.value = this.getUrlproduct();
    }
  }

  updateValue() {
    this.cell.newValue = this.productText.nativeElement.value;
    console.log('this.product.nativeElement.value', this.productText.nativeElement.value);
    console.log('this.product.nativeElement.value.length', this.productText.nativeElement.value.length);
    if(this.productText.nativeElement.value.length > 2) {
      this.loading = true;
      this.visibleList = false;
      this.restClientService.postService('searchProducts', {query: this.productText.nativeElement.value}).subscribe(
        data => {
          this.visibleList = true;
          this.loading = false;
          this.products =data;
        },
        error => {
          this.loading = false;
        }
      );
    }
  }

  getUrlproduct(): string {
    return this.productText.nativeElement.innerText;
  }

  searchItemClicked(item) {
    this.visibleList = false;
    this.productText.nativeElement.value = item;
  }

}
