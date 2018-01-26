import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService} from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars=[];
  id:number;
  
  constructor(private route: ActivatedRoute,private _data: DataService, private router:Router) { }

  ngOnInit() {
    this._data.car.subscribe(res => this.cars = res);
    this._data.changeCars(this.cars);
    this.id=this.route.snapshot.params.id;
  }
  onLogOut(){
    this.router.navigate(['']);
    this._data.userLoggedFalse();
  }
}
