import { Component, OnInit } from '@angular/core';

import { ProductDataService } from './../services/product-data.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  pId: number;
  pName: string;

  constructor(public dataService: ProductDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(this.pId + " - " + this.pName);
    this.dataService.addProduct({
      'productId': this.pId,
      'productName': this.pName
    });
  }

}
