import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {
  categories: any;
  selectedImg: any

  msg = "";
  constructor(public pdtSer: ProductsService, public myrouter: Router) { }

  ngOnInit(): void {
    this.pdtSer.getCategories().subscribe({
      next: (data: any[]) => {
        console.log("addproduct");
        this.categories = data;
      }, error: (error: any) => {
        console.log(error);
      }
    })

  }
  selectImg(event: any) {

    this.selectedImg = event.target.files[0];
    console.log(this.selectedImg);
  }

  createProduct(form: NgForm) {
    console.log(form.value);
    var fd = new FormData();
    fd.append("pdtCatId", form.value.catId);
    fd.append("pdtName", form.value.pdtName);
    fd.append("pdtPrice", form.value.pdtPrice);
    fd.append("pdtDesc", form.value.pdtDesc);

    fd.append("pdtImg", this.selectedImg);
    this.pdtSer.addProduct(fd).subscribe({
      next: (data: string) => {
        console.log(data);
        this.msg = data;
        form.reset();
      }, error: (error: any) => {
        console.log(error);
        this.msg = "Something Went Wrong"
      }
    })
  }
}
