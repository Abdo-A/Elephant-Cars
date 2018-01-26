import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class DataService {

  cars = new BehaviorSubject<any>([]);
  car = this.cars.asObservable();
  private isUserLoggedIn = false;
  constructor(private db: AngularFireDatabase) {
    db.list('/cars')
      .valueChanges().subscribe(cars=>{
        this.databaseUpdatesCars(cars);
      })
  }

  databaseUpdatesCars(car) {
    this.cars.next(car);
  }

  changeCars(car) {
    //update service variable
    this.cars.next(car);
    //update database
    for (let i=0; i<car.length; i++){
      this.db.list('/cars/').set((i.toString()),car[i]);
    }
  }

  changeCarsIncludingRemove(car) {
    //update service variable
    this.cars.next(car);
    //update database
    for (let i=0; i<car.length; i++){
      this.db.list('/cars/').set((i.toString()),car[i]);
    }
    for (let i=car.length; i<1000;i++){
      this.db.list('/cars').remove(i.toString())
    }
  }

  userLoggedTrue(){
    this.isUserLoggedIn = true;
  }
  userLoggedFalse(){
    this.isUserLoggedIn = false;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}