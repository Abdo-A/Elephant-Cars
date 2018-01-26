import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { AngularFireDatabase,AngularFireObject,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataSource} from '@angular/cdk/collections';
import { HttplinkService } from '../../httplink.service'
import { Cars } from '../../models/cars.model';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars= [];

  dataSource = new CarsDataSourceFromLink(this.httplinkService);
  displayedColumns=['brand','country','year','delete'];
  constructor(private router:Router,private _data: DataService,private httplinkService:HttplinkService) { }

  ngOnInit() {
    this._data.car.subscribe(res => this.cars = res);
    this._data.changeCars(this.cars);
    this.dataSource = new CarsDataSourceFromLink(this.httplinkService);
  }

  ngAfterViewInit()	{
    this.dataSource = new CarsDataSourceFromLink(this.httplinkService);
  }

  takeMeTo(id){
    this.router.navigate(['car/'+id]);
  }


  deleteCar(indexToDelete){
    this.cars.splice(indexToDelete,1);
    this._data.changeCarsIncludingRemove(this.cars);
    this.dataSource = new CarsDataSourceFromLink(this.httplinkService);
  }

  tableRefresh(){
    this.dataSource = new CarsDataSourceFromLink(this.httplinkService);
    console.log('haha');
  }

  onLogOut(){
      this.router.navigate(['']);
      this._data.userLoggedFalse();
  }
}



export class CarsDataSourceFromLink extends DataSource<any> {
  constructor(private httplinkService:HttplinkService) {
    super();
  }
  connect(): Observable<Cars[]> {
    return this.httplinkService.getCars();
  }
  disconnect() {}
}
