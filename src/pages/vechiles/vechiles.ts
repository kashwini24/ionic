import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-vechiles',
  templateUrl: 'vechiles.html'
})
export class VechilesPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController, public apiProvider: ApiProvider) {



  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Sort By',
     buttons: [
       {
         text: 'Default',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Available',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Booked',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

}
