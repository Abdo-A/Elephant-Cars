import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { AddcarComponent } from './components/addcar/addcar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
{
  path:'', component: LoginComponent
},
{
  path:'home', canActivate: [AuthGuard] , component: HomeComponent
},
{
  path:'cars/add', canActivate: [AuthGuard] , component: AddcarComponent
},
{
  path:'car/:id', canActivate: [AuthGuard] , component: CarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
