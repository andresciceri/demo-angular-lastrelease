import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

productsList : Product[];

  constructor(private router: Router, private _productsService: ProductsService) { }

  ngOnInit() {
  	this._productsService.getProductsList()
          .then(list => {
          	this.productsList = list.result;
          });
  }

}
