import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cars } from './models/cars.model';

@Injectable()
export class HttplinkService {

  private serviceUrl = 'https://the-elephant-cars.firebaseio.com/cars.json';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.serviceUrl);
  }

}
