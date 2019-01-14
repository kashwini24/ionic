import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  static readonly LOGIN_URL = 'http://testnetwork.xyz/radhesh/Users/testing';


  access: boolean;
  token: string;

  constructor(public http: HttpClient) {}

  // Login
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials.");
    } else {
      return Observable.create(observer => {
       this.http.post(AuthServiceProvider.LOGIN_URL, credentials)
        .map(res => res)
        .subscribe( data => {
          console.log(data);
          // if (data.access_token) {
          //   this.token = 'Bearer ' + data.access_token;
          //   this.access = true;
          // } else {
          //   this.access = false;
          // }
        });

        setTimeout(() => {
              observer.next(this.access);
          }, 500);

        setTimeout(() => {
              observer.complete();
          }, 1000);


      }, err => console.error(err));
    }
  }


  // Get Token
  public getToken() {
    return this.token;
  }

  // Logout
  public logout() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

}
