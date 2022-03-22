import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/getcategories");
  }
  getallProductlist() {
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/listproducts")
  }
  getmycartItem() {
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/mycart");
  }
  addProduct(data: any) {
    return this.http.post<string>("https://credo-shoppingcartv5.herokuapp.com/addproducts", data)
  }
  getProductcatwise(catid: string) {
    return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/getpdtcatwise/s" + catid )
  }
}
