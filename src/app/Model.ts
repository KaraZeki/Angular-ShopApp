export class Model {
  categoryName:string = "Telefon Kategorisi";

  constructor() {
    this.categoryName = "Telefon Kategorisi";

  }
}
export class Product {
  productId;
  name;
  price;
  isActive;

  constructor(productId:number, name: string, price: number, isActive: number) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}
