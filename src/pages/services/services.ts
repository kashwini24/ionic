import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ServicesdetailsPage } from '../servicesdetails/servicesdetails';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {




  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ServicesdetailsPage);
  }

}
