import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  @Input() product!: Product;

  @Input() products!:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  editProduct(productId:string,name:string,price:string,isActive:boolean){
    const p=new Product(Number(productId),name,Number(price),Number(isActive))
    this.productService.editProduct(p).subscribe(product=>{
      this.products.splice(this.products.findIndex(x=>x.productId==p.productId),1,p);
    });

  }
}
