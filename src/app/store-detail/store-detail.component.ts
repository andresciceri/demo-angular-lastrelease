import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { StoreDetailService } from './store-detail.service';
import { Stores } from '../stores/stores';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css'],
  providers: [StoreDetailService]
})
export class StoreDetailComponent implements OnInit {

  store : Stores;

  constructor(
    private _storeDetailService: StoreDetailService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.store = new Stores();
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._storeDetailService.getStoreDetail(id)
        .then(store => this.store = store.result);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
