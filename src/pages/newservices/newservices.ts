import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-newservices',
  templateUrl: 'newservices.html'
})
export class NewservicesPage {

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {

  }

}
