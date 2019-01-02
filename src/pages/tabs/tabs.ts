import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { BookingsPage } from '../bookings/bookings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BookingsPage;
  tab3Root = HomePage;

  constructor() {

  }
}
