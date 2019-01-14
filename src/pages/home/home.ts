import { ApiProvider } from './../../providers/api/api';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor(public navCtrl: NavController, public http:HttpClient, public apiProvider: ApiProvider) {
   this.getUsers();
  }
  public getUsers() {
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
  })
};

      let url = 'http://159.65.154.92/api/dashboardCount';
      this.http.get(url, httpOptions).map(res => res).subscribe(
        data => {

        }
      );
    }

    public getToken()
    {
      return 'Bearer jsdjoiadioaid';
    }
}
