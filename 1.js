class Product {
  static productCount = 0;

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    Product.productCount++;
  }

  static totalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
  }
}

let product1 = new Product(1, "Product A", 100);
let product2 = new Product(2, "Product B", 200);

console.log(Product.productCount); 
console.log(Product.totalPrice([product1, product2])); 
class CareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  static totalPrice(products) {
    return products.reduce((total, product) => {
      let discount = 0;
      if (product.warrantyPeriod === 5) discount = 0.10;
      else if (product.warrantyPeriod === 4) discount = 0.20;
      else if (product.warrantyPeriod === 3) discount = 0.30;
      else if (product.warrantyPeriod === 2) discount = 0.40;
      else if (product.warrantyPeriod === 1) discount = 0.50;

      let finalPrice = product.price * (1 - discount);
      return total + finalPrice;
    }, 0);
  }
}

let careProduct1 = new CareProduct(3, "Care Product A", 150, 4); 
let careProduct2 = new CareProduct(4, "Care Product B", 200, 2); 

console.log(CareProduct.totalPrice([careProduct1, careProduct2])); 