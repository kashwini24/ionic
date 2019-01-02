import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookingsPage } from '../bookings/bookings';
import { ServicesPage } from '../services/services';
import { VechilesPage } from '../vechiles/vechiles';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  tab1Root = BookingsPage;
  tab2Root = ServicesPage;
  tab3Root = VechilesPage;

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ServicesPage);
  }

}
