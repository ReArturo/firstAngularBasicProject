import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  private privatedata = [];
  private apiurl = "http://jsonplaceholder.type.code.com/users";  //Site can't be reached ! Server does not exist anymore

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiurl);
  }
}
