import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  myRouter: any;

  constructor(public pdtSer :ProductsService, public myrouter:Router) { }

  ngOnInit(): void {
    this.pdtSer.getmycartItem().subscribe({next : (data:any[])=>{
      console.log(data);
    } ,error:(error:any)=>{
      console.log(error)
      if(error.status==401){
        localStorage.clear();
        this.myrouter.navigateByUrl("/login");
      }

    }
  })}


}
