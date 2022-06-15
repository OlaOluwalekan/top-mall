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
  "./images/product/1.jpg"
);

const computingProducts = {};
