import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from './stores.service';
import { Stores } from './stores';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
  providers: [StoresService],
})
export class StoresComponent implements OnInit {

  storesList : Stores[];

  constructor(private router: Router, private _storesService: StoresService) { }

  ngOnInit() {

  	this._storesService.getStoresList()
          .then(list => {
          	this.storesList = list.result;
          });
  }

  viewDetail(id : number) {
  	let link = ['/store-detail', id];
    this.router.navigate(link);
  }

}
