import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todaydate: any;

  public persondata: any[] = [];

  constructor(private myservice: MyserviceService) {}
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.myservice.getData().subscribe( (data: { [key: string]: any }) => {
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    });
  }




  title = 'Bienvenido en Angular';
  description = 'Welcome to Mi Primer Angular Project!';

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  isAvailable = true;

  simplePipeData = "This is going really Good";

  setTrue(){
    console.log("Now We have TRUE value on click!");
  }
  setFalse(){
    console.log("Now We have FALSE value on click!");
  }
  firstFeature = {
    heading: "Feature One",
    body: "Some feature details for the feature ONE demo version"
  }
  secondFeature = {
    heading: "Feature Two",
    body: "Some feature details for the feature TWO demo version"
  }
  thirdFeature = {
    heading: "Feature Three",
    body: "Some feature details for the feature THREE demo version"
  }
  fourthFeature = {
    heading: "Feature Four",
    body: "Some feature details for the feature FOUR demo version"
  }
}
