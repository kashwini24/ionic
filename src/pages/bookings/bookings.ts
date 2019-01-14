import { ApiProvider } from './../../providers/api/api';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { BookingdetailsPage } from '../bookingdetails/bookingdetails';

import { NewservicesPage } from '../newservices/newservices';
import { VechilesPage } from '../vechiles/vechiles';

@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html'
})
export class BookingsPage {


  BookingList: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider,public http:HttpClient) {

    //this.BookingList = this.apiProvider.dashboardCount();



    this.getUsers();

  }

  public getUsers() {
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
  })
};

      let url = 'http://159.65.154.92/api/getBookingList';
      this.http.post(url, httpOptions).map(res => res).subscribe(
        data => {

        }
      );
    }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BookingdetailsPage);
  }

}
