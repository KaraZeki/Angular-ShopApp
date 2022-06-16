import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string="http://localhost:5000/api/"
  model =new Model();
  constructor(private http:HttpClient) { }

  getProducst():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+"products");
    // return this.model.products;
  }

  addProduct(product:Product):Observable<Product>{
   return this.http.post<Product>(this.baseUrl+"products",product);
    // this.model.products.push(product);
  }

  deleteProduct(productId:Number){
    return this.http.delete<Product>(this.baseUrl+"products/?productId="+productId);
  //  this.model.products=this.model.products.filter(prod=>prod.id!=id);
  }
  editProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.baseUrl+"products",product);
    // var foundIndex = this.model.products.findIndex(x => x.id == product.id);
    // this.model.products[foundIndex] = product;
  }
  getproductById(id:Number){
    // return this.model.products.find(x=>x.id==id);
  }
}
