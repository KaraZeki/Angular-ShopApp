import { Component, Input, OnInit } from '@angular/core';
import { Model, Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() products:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   model=new  Model();
   max :number=0;
   min:number=0;

  addProduct(name:string,price:string,isActive:boolean,category:string){

    // this.min = Math.ceil(1);
	  // this.max = Math.floor(100000);
    const p =new Product(0,name,Number(price),Number(isActive));
    this.productService.addProduct(p).subscribe(product=>{
     this.products.push(product)
    });
  }


}
