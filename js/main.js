import { productList } from "./products.js";
let contentHeadImageDiv = document.getElementById("contentImage");
let productListDiv = document.querySelector(".product-list");

let contentHeadImage = [
  "./images/content-head-images/girl-colourful.jpg",
  "./images/content-head-images/fastest-dilevery.png",
  "./images/content-head-images/discount.png",
];

let ChangeImage = () => {
  let headImageInterval = 2000;
  for (let i = 0; i < contentHeadImage.length; i++) {
    // setTimeout(() => {
    //   contentHeadImageDiv.src = contentHeadImage[i];
    // }, headImageInterval + i * headImageInterval);
    setInterval(() => {
      contentHeadImageDiv.src = contentHeadImage[i];
    }, headImageInterval + i * headImageInterval);
    console.log(headImageInterval + i * headImageInterval);
  }
};

let AddToProductList = () => {
  // let productContainer;
  for (let i = 0; i < productList.length; i++) {
    let productContainer = document.createElement("div");
    let productImageDiv = document.createElement("div");
    let productDetails = document.createElement("div");
    productImageDiv.classList.add("product-image");
    productDetails.classList.add("product-details");

    // CREATE AND ADD PRODUCT IMAGE
    let productImage = document.createElement("img");
    productImage.src = productList[i].imageURL;
    productImageDiv.appendChild(productImage);

    // CREATE AND ADD PRODUCT NAME
    let productName = document.createElement("h4");
    let productNameText = document.createTextNode(productList[i].name);
    productName.appendChild(productNameText);
    productName.classList.add("product-name");

    // CREATE AND ADD PRODUCT CATEGORY
    let productCategory = document.createElement("p");
    let productCategoryText = document.createTextNode(productList[i].category);
    productCategory.appendChild(productCategoryText);
    productCategory.classList.add("product-category");

    // CREATE AND ADD PRODUCT PRICE
    let productPrice = document.createElement("h3");
    let productPriceText = document.createTextNode(productList[i].price);
    productPrice.appendChild(productPriceText);
    productPrice.classList.add("product-price");

    // CREATE AND ADD PRODUCT ACTIONS TO LIKE AND ADD TO CART
    let productActionsDiv = document.createElement("div");
    let productAddToCartDiv = document.createElement("div");
    let productLikeDiv = document.createElement("div");
    productAddToCartDiv.classList.add("add-to-cart");
    productLikeDiv.classList.add("like-product");
    productActionsDiv.classList.add("product-actions");

    let productAddToCart = document.createElement("i");
    productAddToCartDiv.appendChild(productAddToCart);
    productAddToCart.classList.add("fas", "fa-cart-plus");

    let productLike = document.createElement("i");
    productLikeDiv.appendChild(productLike);
    productLike.classList.add("fas", "fa-heart");

    productActionsDiv.appendChild(productAddToCartDiv);
    productActionsDiv.appendChild(productLikeDiv);

    productDetails.appendChild(productName);
    productDetails.appendChild(productCategory);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productActionsDiv);

    productContainer.appendChild(productImageDiv);
    productContainer.appendChild(productDetails);
    productContainer.classList.add("product-container");

    productListDiv.appendChild(productContainer);
    // console.log(productName);
  }
};

window.onload = () => {
  ChangeImage();
  AddToProductList();
};
