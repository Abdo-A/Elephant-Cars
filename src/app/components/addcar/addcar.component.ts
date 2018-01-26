import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppRoutingModule } from '../../app-routing.module';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  cars=[];

  brandField;yearField;imgurlField;

  minDate = new Date(1930, 0, 1);
  maxDate = new Date(2030, 0, 31);
  startDate = new Date(2012, 0, 1);

  warning:string='';

  countries: any[];

  constructor(private router:Router,private _data: DataService, db: AngularFireDatabase) {
    db.list('/countries')
      .valueChanges().subscribe(countries=>{
        this.countries=countries;
      })
  }

  ngOnInit() {
    this._data.car.subscribe(res => this.cars = res);
    this._data.changeCars(this.cars);
  }
  onSubmitAddCar(userValues) {
    let order=this.cars.length+1;
    if(userValues.brand&&userValues.country&&userValues.year&&userValues.imgurl){
      let car={brand:userValues.brand, country:userValues.country, year: userValues.year.getFullYear(), imgurl:userValues.imgurl, id:order}
      this.cars.push(car);
      this._data.changeCars(this.cars);
      this.brandField=this.yearField=this.imgurlField='';
      this.router.navigate(['/home']);
    }
    else {
      this.warning='Please Enter Proper Values For All The Fields';
    }
  }
  onLogOut(){
    this.router.navigate(['']);
    this._data.userLoggedFalse();
  }
}
