import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListproductComponent } from './Products/listproduct/listproduct.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MycartComponent } from './mycart/mycart.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ListproductComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    MycartComponent,
    AddproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
