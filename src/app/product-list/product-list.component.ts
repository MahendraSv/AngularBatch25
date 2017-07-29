import {
  Component,
  OnInit
} from '@angular/core';

import { ProductDataService } from './../services/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showImages: boolean = false;
  products: any[];

  constructor(productDataService: ProductDataService) {
    this.products = productDataService.getData();
  }

  ngOnInit() {}

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  public getColor(p): string {
    if(p > 10) {
      return "green";
    } else {
      return "black";
    }
  }
}