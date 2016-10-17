import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoresService {

  constructor(private http : Http) { }

  
  private _apiUrl = 'http://lcboapi.com/'; //Para obtener tu token de acceso debes ingresar a la página y crear tu cuenta.

  getStoresList () : Promise<any>{
    
    let headers = new Headers({'authorization' : 'Token TOKEN_ACCESS'});
    let options = new RequestOptions({ headers : headers});

    return this.http.get(this._apiUrl + "stores/", options)
              .toPromise()
              .then(res => res.json())
              .catch(this.handleError); 
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
