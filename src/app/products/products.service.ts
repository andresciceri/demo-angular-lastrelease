import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  constructor(private http : Http) { }

  private _apiUrl = 'http://lcboapi.com/';

  getProductsList () : Promise<any>{
    
    let headers = new Headers({'authorization' : 'Token MDo2YjgyNWNkYS05MjM4LTExZTYtYWQyMi01ZjhiNmNmNzM0OWU6V04xYW1vU3ZFWXB0QUkzU2tBUEV0bElUQ0tHWW5QdVN2eG1T'});
    let options = new RequestOptions({ headers : headers});

    return this.http.get(this._apiUrl + "products/", options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError); 
  }

  getProductByStore (id : number) : Promise<any> {
  	let headers = new Headers({'authorization' : 'Token MDo2YjgyNWNkYS05MjM4LTExZTYtYWQyMi01ZjhiNmNmNzM0OWU6V04xYW1vU3ZFWXB0QUkzU2tBUEV0bElUQ0tHWW5QdVN2eG1T'});
    let options = new RequestOptions({ headers : headers});

    return this.http.get(this._apiUrl + "stores?product_id=" + id, options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError); 	
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
