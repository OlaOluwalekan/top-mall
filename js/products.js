class Product {
  constructor(name, category, price, imageURL) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.imageURL = imageURL;
  }
}

let Product1 = new Product(
  "Laptop X-H350",
  "computing home-and-office",
  "245,000",
  "./images/products/1.jpg"
);
let Product2 = new Product(
  "Cando Desktop JSC",
  "computing home-and-office",
  "133,000",
  "./images/products/2.jpg"
);
let Product3 = new Product(
  "Baby Feed",
  "baby product",
  "56,400",
  "./images/products/3.jpg"
);
let Product4 = new Product(
  "Diapers 250D",
  "baby product",
  "14,200",
  "./images/products/4.jpg"
);
let Product5 = new Product(
  "Smart 750X",
  "computing home-and-office",
  "78,990",
  "./images/products/5.jpg"
);

const productList = [Product1, Product2, Product3, Product4, Product5];

export { productList };
