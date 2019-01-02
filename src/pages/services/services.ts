import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServicesdetailsPage } from '../servicesdetails/servicesdetails';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController) {




  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ServicesdetailsPage);
  }

}
