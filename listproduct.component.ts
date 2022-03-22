import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  products: any[] = [];
  data: any=[]
  constructor(public pdtSer: ProductsService, public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe({
      next: (param: Params) => {
        console.log(param);
        if (param["catid"]) {
          this.pdtSer.getProductcatwise(param["catid"]).subscribe({
            next: (data: any[]) => {
              console.log(data);
            }, error: (error: any) => {
              console.log(error);
             this.products=this.data;        
          }})
        } else {
          this.pdtSer.getallProductlist().subscribe({
            next: (data: any[]) => {
              console.log(data);
              this.products = data;
            }, error: (error: any) => {
              console.log(error);
            }
          });
        }


      }
    })

  }

}
