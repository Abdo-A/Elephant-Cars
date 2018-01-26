import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username='intern@theelephant.tech';
  private password='thisIsSecure';

  constructor(private router:Router,private _data: DataService) { }

  invalid:boolean=false;

  ngOnInit() {
  }

  onLogIn(formValues){
    if (formValues.username==this.username && formValues.password==this.password){
      this.invalid=false;
      this._data.userLoggedTrue();
      this.router.navigate(['home']);
    } else {
      this.invalid=true;
    }
  }

}
/* intern@theelephant.tech */
/*thisIsSecure */