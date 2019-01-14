import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  api_url = "http://159.65.154.92/api/";

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get("https://swapi.co/api/films");
  }

  dashboardlogin() {
    return this.http.get(this.api_url+'dashboardlogin');
  }

  dashboardCount()
  {
    return this.http.get(this.api_url+'dashboardCount');
  }

  getVehcileCount()
  {
    return this.http.get(this.api_url+'getVehcileCount');
  }

  getBookingList()
  {
    return this.http.get(this.api_url+'getBookingList');
  }

  bookingCount()
  {
    return this.http.get(this.api_url+'bookingCount');
  }

  serviceCount()
  {
    return this.http.get(this.api_url+'serviceCount');
  }

  getServiceListByQuery()
  {
    return this.http.get(this.api_url+'getServiceListByQuery');
  }


  getVehicles()
  {
    return this.http.get(this.api_url+'getVehicles');
  }

  

}
