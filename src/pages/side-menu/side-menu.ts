import { Component } from '@angular/core';
import { MenuController, NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  MENU = {
    DEFAULT: 'menu-material',
    MATERIAL: 'menu-material',

  };

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  // Only enables right side menu for this page. Testing purposes.
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true, 'menu-right');
  // }
  //
  // ionViewWillLeave() {
  //   this.menuCtrl.enable(false, 'menu-right');
  // }


  enableAuthenticatedMenu(menu) {
    // Disables all other sidemenus


    // Enables then open the selected menu
    this.menuCtrl.enable(true, 'menu-material');
    this.menuCtrl.open('menu-material');
  }

}
