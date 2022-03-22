import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './Products/listproduct/listproduct.component';
import { RouthGuard } from './routh.guard';

const routes: Routes = [
  { path: "", component: ListproductComponent },
  {path:"categories", redirectTo:"/",pathMatch:"full"},
  {path:"categories/:catid",component:ListproductComponent},
  { path: "login", component: LoginComponent },
  { path: "mycart", component: MycartComponent, canActivate: [RouthGuard] },
  { path: "addproduct", component: AddproductComponent },
  { path: "**", component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
