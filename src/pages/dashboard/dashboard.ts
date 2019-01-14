import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { BookingsPage } from '../bookings/bookings';
import { ServicesPage } from '../services/services';
import { VechilesPage } from '../vechiles/vechiles';
// import { HTTP } from '@ionic-native/http';
// import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  tab1Root = BookingsPage;
  tab2Root = ServicesPage;
  tab3Root = VechilesPage;
//   const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
//   })
// };
DashboardCount: Observable<any>;
BookingList: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {

    // this.DashboardCount = this.apiProvider.dashboardCount();
    // this.BookingList = this.apiProvider.getBookingList();



  //   this.http.get('http://159.65.154.92/api/getVehcileCount',return new RequestOptions({
  //         headers: new Headers({
  //           Authorization: `Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI`
  //         }),
  //       }))
  // .subscribe(data => {
  //   console.log(data); // data received by server
  // });


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ServicesPage);
  }

}
