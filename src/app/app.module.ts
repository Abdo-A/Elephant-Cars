import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { HttplinkService } from './httplink.service'
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarComponent } from './components/car/car.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddcarComponent,
    HomeComponent,
    LoginComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [DataService, HttplinkService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
