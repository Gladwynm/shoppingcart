import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[];

  constructor(public pdtSer: ProductsService ,) { }

  ngOnInit(): void {
    this.pdtSer.getCategories().subscribe({ next :(data: any[]) => {
      console.log(data);
      console.log("Categories");
      console.log("Catergories created")
      this.categories =data;
    },error: (error: any) => {
        console.log(error);
    },complete :()=>{
      console.log("Completed");
    }});


  }

  }
