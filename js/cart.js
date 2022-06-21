// import { pagesHeader } from "./header.js";
import { Users } from "./users.js";
import { productList } from "./products.js";

// VARIABLES DECLARATION
let userFullName = document.querySelector(".cart-header h1");
let backFromCart = document.querySelector(".back-from-cart");
let cartListContainer = document.querySelector(".cart-list");

// ****************************************************

// ****************************************************

// ON LOAD WINDOW
window.onload = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "") {
    document.write("Access Denied! This Page is forbidden");
  }

  SetUser();
  LoadCartItems();
  CalculateTotal();
};

// ****************************************************

// ****************************************************

// SET USER NAME
let SetUser = () => {
  let currentUser = localStorage.getItem("currentUser");
  let usersId = JSON.parse(localStorage.getItem("storedEmails"));
  let currentUserId = usersId.indexOf(currentUser);
  let usersDetails = JSON.parse(localStorage.getItem("storedDetails"));
  let userName = usersDetails[currentUserId].fullName;
  userFullName.textContent = userName;
};

// ****************************************************

// ****************************************************

// GO BACK FROM CART
backFromCart.onclick = () => {
  window.location.href = "../index.html";
};

// ****************************************************

// ****************************************************

// LOAD CART ITEMS
let LoadCartItems = () => {
  let currentUser = localStorage.getItem("currentUser");
  let usersId = JSON.parse(localStorage.getItem("storedEmails"));
  let usersDetails = JSON.parse(localStorage.getItem("storedDetails"));
  let currentUserId = usersId.indexOf(currentUser);
  let currentUserCartItems = usersDetails[currentUserId].cartItems;

  let cartProducts = [];

  for (let i = 0; i < currentUserCartItems.length; i++) {
    cartProducts.push(productList[currentUserCartItems[i]]);
  }

  let eachItemCount = [];
  // for (let i = cartProducts.length - 1; i >= 0; i--) {
  for (let i = 0; i < cartProducts.length; i++) {
    eachItemCount.push(1);
  }
  console.log(eachItemCount);

  for (let i = cartProducts.length - 1; i >= 0; i--) {
    // CREATE CONTAINER FOR EACH CART ITEM
    let cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item-container");

    // CREATE CONTAINER FOR IMAGE AND THE IMAGE
    let cartItemImageDiv = document.createElement("div");
    let cartItemImage = document.createElement("img");
    cartItemImage.src = "../" + cartProducts[i].imageURL;
    cartItemImageDiv.appendChild(cartItemImage);
    cartItemImageDiv.classList.add("cart-image-div");

    // CART ITEM DETAILS
    let cartItemDetailsDiv = document.createElement("div");
    let cartProductName = document.createElement("h4");
    let cartProductNameText = document.createTextNode(cartProducts[i].name);
    let cartProductCategory = document.createElement("h6");
    let cartProductCartegoryText = document.createTextNode(
      cartProducts[i].category
    );
    cartProductName.appendChild(cartProductNameText);
    cartProductCategory.appendChild(cartProductCartegoryText);

    // REMOVE FROM CART BUTTON
    let cartButtonDiv = document.createElement("div");
    let cartButton = document.createElement("button");
    let cartButtonText = document.createTextNode("Remove");
    let cartButtonIcon = document.createElement("i");
    cartButton.appendChild(cartButtonText);
    cartButtonDiv.appendChild(cartButton);
    cartButtonDiv.appendChild(cartButtonIcon);
    cartButtonIcon.classList.add("fas", "fa-trash");
    cartButtonDiv.classList.add("cart-remove-btn");

    // CART ITEM PRICE
    let cartPriceDiv = document.createElement("div");
    let cartItemPrice = document.createElement("h2");
    let cartItemPriceText = document.createTextNode(cartProducts[i].price);

    // PRICE COUNTER
    let cartPriceCounterDiv = document.createElement("div");
    let cartPriceCounterUp = document.createElement("button");
    let cartPriceCounterDown = document.createElement("button");
    let cartPriceCounter = document.createElement("div");
    let cartPriceCounterUpText = document.createTextNode("+");
    let cartPriceCounterDownText = document.createTextNode("-");
    let cartPriceCounterText = document.createTextNode(eachItemCount[i]);

    cartPriceCounter.appendChild(cartPriceCounterText);
    cartPriceCounterUp.appendChild(cartPriceCounterUpText);
    cartPriceCounterDown.appendChild(cartPriceCounterDownText);
    cartPriceCounterDiv.appendChild(cartPriceCounterDown);
    cartPriceCounterDiv.appendChild(cartPriceCounter);
    cartPriceCounterDiv.appendChild(cartPriceCounterUp);
    cartPriceCounterDiv.classList.add("cart-price-counter");
    cartPriceCounterUp.classList.add("cart-item-increase");
    cartPriceCounterDown.classList.add("cart-item-increase");

    cartItemPrice.appendChild(cartItemPriceText);
    cartPriceDiv.appendChild(cartPriceCounterDiv);
    cartPriceDiv.appendChild(cartItemPrice);
    cartPriceDiv.classList.add("cart-price-container");

    cartItemDetailsDiv.appendChild(cartProductName);
    cartItemDetailsDiv.appendChild(cartProductCategory);
    cartItemDetailsDiv.appendChild(cartButtonDiv);
    cartItemDetailsDiv.appendChild(cartPriceDiv);
    cartItemDetailsDiv.classList.add("cart-item-details");

    cartItemDiv.appendChild(cartItemImageDiv);
    cartItemDiv.appendChild(cartItemDetailsDiv);
    cartListContainer.appendChild(cartItemDiv);

    // cartItemDiv.setAttribute("click", "RemoveItem(this)");
  }
  return eachItemCount;
};

// ****************************************************

// ****************************************************

// CALCULATE CART TOTAL
let CalculateTotal = () => {
  let currentUser = localStorage.getItem("currentUser");
  let usersId = JSON.parse(localStorage.getItem("storedEmails"));
  let usersDetails = JSON.parse(localStorage.getItem("storedDetails"));
  let currentUserId = usersId.indexOf(currentUser);
  let currentUserCartItems = usersDetails[currentUserId].cartItems;
  // console.log(currentUserCartItems);
  let cartProducts = [];

  for (let i = 0; i < currentUserCartItems.length; i++) {
    cartProducts.push(productList[currentUserCartItems[i]]);
  }
  // console.log(cartProducts);

  let cartPrice = [];
  for (let i = 0; i < cartProducts.length; i++) {
    let rawCartPrice = cartProducts[i].price.split(",");
    let ithPrice = rawCartPrice.join("");
    // console.log(ithPrice);
    // console.log(rawCartPrice);
    cartPrice.push(ithPrice);
  }
  console.log(cartPrice);

  let rawCartSum = 0;
  for (let i = 0; i < cartPrice.length; i++) {
    rawCartSum += Number(cartPrice[i]);
  }
  console.log(rawCartSum);
  let cartSum = InsertComma(rawCartSum);
  console.log(InsertComma(rawCartSum));

  let cartSumDiv = document.createElement("div");
  let cartSumWord = document.createElement("h4");
  let cartSumWordText = document.createTextNode(
    "Total Sum of Items in your cart is : "
  );
  let cartSumTotal = document.createElement("h1");
  let cartSumTotalText = document.createTextNode(cartSum);

  cartSumWord.appendChild(cartSumWordText);
  cartSumTotal.appendChild(cartSumTotalText);
  cartSumDiv.appendChild(cartSumWord);
  cartSumDiv.appendChild(cartSumTotal);
  cartListContainer.appendChild(cartSumDiv);
  cartSumDiv.classList.add("cart-sum-div");
};

let InsertComma = (num) => {
  if (num.length < 4) {
    return num;
  } else {
    num = num.toString();
    let numArray = num.split("");
    let aNum = 0;
    for (let i = numArray.length - 1; i >= 0; i--) {
      if (i == numArray.length - 4) {
        numArray.splice(i + 1, 0, ",");
        // aNum = numArray[i];
      }
    }
    let newArray = numArray.join("");
    let checkArr = newArray.split(",");
    if (checkArr[0].length < 4) {
      return newArray;
    } else {
      let fArr = checkArr[1];
      checkArr = checkArr[0].split("");
      for (let i = checkArr.length - 1; i >= 0; i--) {
        if (i == checkArr.length - 4) {
          checkArr.splice(i + 1, 0, ",");
          // aNum = numArray[i];
        }
      }
      newArray = checkArr.join("") + "," + fArr;
      return newArray;
    }
  }
};

// ****************************************************

// ****************************************************

// REMOVE ITEM FROM CART
// let RemoveItem = () => {
//   alert("removed");
// };
