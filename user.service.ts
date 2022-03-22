
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  userRegistration(data: any) {
    console.log(data);

    return this.http.post<string>("https://credo-shoppingcartv5.herokuapp.com/register", data);
  }

 /* userNamecheck(data: string) {
    console.log(data);
    return this.http.get<string>("https://credo-shoppingcartv5.herokuapp.com/usernamecheck/" + data);
  }*/

  userLogin(data: any) {
    console.log(data);
    return this.http.post<string>("https://credo-shoppingcartv5.herokuapp.com/login", data);
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("loginuser");
  }
  loginToken()
  {
    return localStorage.getItem("loginuser");
  }
}
