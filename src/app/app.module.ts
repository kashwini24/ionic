import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BookingsPage } from '../pages/bookings/bookings';
import { ServicesPage } from '../pages/services/services';
import { VechilesPage } from '../pages/vechiles/vechiles';
import { AttendencePage } from '../pages/attendence/attendence';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { NewservicesPage } from '../pages/newservices/newservices';
import { TabsPage } from '../pages/tabs/tabs';
import { BookingdetailsPage } from '../pages/bookingdetails/bookingdetails';
import { ServicesdetailsPage } from '../pages/servicesdetails/servicesdetails';
import { VechiledetailsPage } from '../pages/vechiledetails/vechiledetails';


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
    ServicesPage,
    VechilesPage,
    AttendencePage,
    DashboardPage,
    NewservicesPage,
    TabsPage,
    BookingdetailsPage,
    ServicesdetailsPage,
    VechiledetailsPage
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
    ServicesPage,
    VechilesPage,
    AttendencePage,
    DashboardPage,
    NewservicesPage,
    TabsPage,
    BookingdetailsPage,
    ServicesdetailsPage,
    VechiledetailsPage
  ],
  providers: [ StatusBar,AppState,
    SplashScreen, Camera, CardIO,  { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
