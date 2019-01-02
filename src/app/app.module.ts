import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BookingsPage } from '../pages/bookings/bookings';
import { ServicesPage } from '../pages/services/services';
import { TabsPage } from '../pages/tabs/tabs';

import { Camera } from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppState } from './app.global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BookingsPage,
    TabsPage
  ],
  imports: [

    IonicModule.forRoot(MyApp),
     BrowserModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BookingsPage,
    TabsPage
  ],
  providers: [ StatusBar,AppState,
    SplashScreen, Camera, CardIO,  { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
