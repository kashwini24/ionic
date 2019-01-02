import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookingdetailsPage } from '../bookingdetails/bookingdetails';
import { DashboardPage } from '../dashboard/dashboard';
import { NewservicesPage } from '../newservices/newservices';
import { VechilesPage } from '../vechiles/vechiles';

@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html'
})
export class BookingsPage {
  tab1Root = DashboardPage;
  tab2Root = NewservicesPage;
  tab3Root = VechilesPage;

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BookingdetailsPage);
  }

}
