import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { ProductDataService } from './../services/product-data.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  foundProduct: any;

  constructor(
    public router: ActivatedRoute,
    public dataService: ProductDataService
  ) {
    this.id = this.router.snapshot.params['id'];
    this.foundProduct = this.dataService.getDataById(this.id);
  }

  ngOnInit() {
  }

}
