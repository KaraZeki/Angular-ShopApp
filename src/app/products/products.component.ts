import { Component, OnInit } from '@angular/core';
import { Model, Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  selectedProduct!: Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducst().subscribe(products=>{
    this.products= products;
    })
  }
  onSelectedProduct(product:Product){
    this.selectedProduct=product;
  }

  deleteProduct(id:Number){
    this.productService.deleteProduct(id).subscribe(data=>{
     this.products.splice(this.products.findIndex(x=>x.productId==id),1);
    });
  }

}
