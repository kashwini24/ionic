import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { DashboardPage } from '../dashboard/dashboard';
import { NewservicesPage } from '../newservices/newservices';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = NewservicesPage;
  tab3Root = HomePage;

  constructor() {

  }
}
