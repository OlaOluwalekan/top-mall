import { productList } from "./products.js";
import { Users } from "./users.js";
// import { usersId, usersDetails } from "./login-register.js";
import {
  pagesHeader,
  userIconDiv,
  userOptions,
  notLogedinIconDiv,
  loggedinIconDiv,
  loggedinIconText,
  gotoCart,
  gotoProfile,
  logOut,
  itemInCartH5,
} from "./header.js";
// import { usersId, usersDetails } from "./login-register.js";
// import { productNameDiv } from "./product-details.js";

// VARIABLES DECLARATION
let productId = [];
// let eachItemCount = JSON.parse(localStorage.getItem("eachItemCount"));

// localStorage.setItem("currentUser", "");

let usersId = JSON.parse(localStorage.getItem("storedEmails"));
let usersDetails = JSON.parse(localStorage.getItem("storedDetails"));

let containerForAll = document.querySelector(".container");
let contentHeadImageDiv = document.getElementById("contentImage");
let productListDiv = document.querySelector(".product-list");
let productDetailsDiv = document.querySelector(".product-details");

let contentHeadImage = [
  "./images/content-head-images/girl-colourful.jpg",
  "./images/content-head-images/fastest-dilevery.png",
  "./images/content-head-images/discount.png",
];

// ****************************************************

// ****************************************************

// WHEN WINDOW LOADS
window.onload = () => {
  for (let i = 0; i < productList.length; i++) {
    productId.push(i);
  }
  containerForAll.prepend(pagesHeader);

  CheckLoginStatus();

  ChangeImage();

  LoadProductList();

  GetItemsCount();
};

// ****************************************************

// ****************************************************

// CHECK IF ANY USER EXIST

// ****************************************************

// ****************************************************

// SHOW RANDOM IMAGE ON PAGE CONTENT HEAD
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

// ****************************************************

// ****************************************************

// LOAD PRODUCTS TO PAGE CONTENT
let LoadProductList = () => {
  let currentUser = localStorage.getItem("currentUser");
  for (let i = 0; i < productList.length; i++) {
    const productContainer = document.createElement("div");
    const productImageDiv = document.createElement("div");
    const productDetails = document.createElement("div");
    productImageDiv.classList.add("product-image");
    productDetails.classList.add("product-details");

    // CREATE AND ADD PRODUCT IMAGE
    const productImage = document.createElement("img");
    productImage.src = productList[i].imageURL;
    productImageDiv.appendChild(productImage);

    // CREATE AND ADD PRODUCT NAME
    const productName = document.createElement("h4");
    const productNameText = document.createTextNode(productList[i].name);
    productName.appendChild(productNameText);
    productName.classList.add("product-name");

    // CREATE AND ADD PRODUCT CATEGORY
    const productCategory = document.createElement("p");
    const productCategoryText = document.createTextNode(
      productList[i].category
    );
    productCategory.appendChild(productCategoryText);
    productCategory.classList.add("product-category");

    // CREATE AND ADD PRODUCT PRICE
    const productPrice = document.createElement("h3");
    const productPriceText = document.createTextNode(productList[i].price);
    productPrice.appendChild(productPriceText);
    productPrice.classList.add("product-price");

    // CREATE AND ADD PRODUCT ACTIONS TO LIKE AND ADD TO CART
    const productActionsDiv = document.createElement("div");
    const productAddToCartDiv = document.createElement("div");
    const productLikeDiv = document.createElement("div");
    productAddToCartDiv.classList.add("add-to-cart");
    productLikeDiv.classList.add("like-product");
    productActionsDiv.classList.add("product-actions");

    const productAddToCart = document.createElement("i");
    productAddToCartDiv.appendChild(productAddToCart);
    productAddToCart.classList.add("fas", "fa-cart-plus");
    productAddToCartDiv.id = i;

    const productLike = document.createElement("i");
    productLikeDiv.appendChild(productLike);
    productLike.classList.add("fas", "fa-heart");
    productLikeDiv.id = i;

    productActionsDiv.appendChild(productAddToCartDiv);
    productActionsDiv.appendChild(productLikeDiv);

    productDetails.appendChild(productName);
    productDetails.appendChild(productCategory);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productActionsDiv);

    productContainer.appendChild(productImageDiv);
    productContainer.appendChild(productDetails);
    productContainer.classList.add("product-container");
    productImageDiv.id = i;
    productListDiv.appendChild(productContainer);

    productImageDiv.addEventListener("click", ShowProduct);
    productLikeDiv.addEventListener("click", AddToLike);
    productAddToCartDiv.addEventListener("click", AddToCart);

    // productLikeDiv.style.color = "red";
    if (currentUser != "" && currentUser != null) {
      let currentUserIndex = usersId.indexOf(currentUser);
      let currentUserLikedItems = usersDetails[currentUserIndex].likedItems;
      let currentUserCartItems = usersDetails[currentUserIndex].cartItems;
      for (let j = 0; j < currentUserLikedItems.length; j++) {
        if (currentUserLikedItems[j] == i) {
          productLikeDiv.style.color = "red";
          // console.log(i + " : " + currentUserLikedItems);
          // console.log(productLikeDiv);
        }
      }

      for (let j = 0; j < currentUserCartItems.length; j++) {
        if (currentUserCartItems[j] == i) {
          productAddToCartDiv.style.color = "red";
          // console.log(i + " : " + currentUserLikedItems);
          // console.log(productLikeDiv);
        }
      }
      itemInCartH5.textContent = currentUserCartItems.length;
    }
  }
};

// ****************************************************

// ****************************************************

// SHOW PRODUCT DETAILS
let productFullDetailsDiv = document.querySelector(".product-full-details");
let goBackFromDetails = document.querySelector(".back-arrow");
let productName = document.querySelector(".product-details-head h1");
let productDetailsImage = document.querySelector(".product-details-image img");
let productDetailsPrice = document.querySelector(".product-details-price h1");

function ShowProduct() {
  productName.textContent = productList[this.id].name;
  productDetailsImage.src = productList[this.id].imageURL;
  productDetailsPrice.textContent = productList[this.id].price;

  productFullDetailsDiv.style.display = "flex";
  BlurBackground();
  // console.log(myUrl);
}

goBackFromDetails.onclick = () => {
  productFullDetailsDiv.style.display = "none";
  UnBlurBackground();
};

// ****************************************************

// ****************************************************

// ADD PRODUCTS TO LIKED ITEMS
function AddToLike() {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "" || currentUser == null) {
    alert("You need to login first");
    window.location.href = "./pages/login-register.html";
  } else {
    let clickedId = this.id;
    let currentUserId = usersId.indexOf(currentUser);
    let currentUserLikedItems = usersDetails[currentUserId].likedItems;
    if (currentUserLikedItems.includes(clickedId)) {
      // let likedIndex = userLikedItems.indexOf(productList[this.id]);
      let likedIndex = currentUserLikedItems.indexOf(clickedId);
      currentUserLikedItems.splice(likedIndex, 1);
      // currentUserLikedItems.splice(this.id, 1);
      this.style.color = "grey";
      usersDetails[currentUserId].likedItems = currentUserLikedItems;
    } else {
      // userLikedItems.push(productList[this.id]);
      currentUserLikedItems.push(clickedId);
      this.style.color = "red";
      usersDetails[currentUserId].likedItems = currentUserLikedItems;
    }
    // console.log(userLikedItems);
    // localStorage.setItem(currentUserLikedItems,);
    console.log(usersDetails[currentUserId].likedItems);
    // console.log(usersDetails);
    localStorage.setItem("storedEmails", JSON.stringify(usersId));
    localStorage.setItem("storedDetails", JSON.stringify(usersDetails));
  }
}

// ****************************************************

// ****************************************************

// ADD PRODUCTS TO CART ITEM
// let eachItemCount = [];
function AddToCart() {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "" || currentUser == null) {
    alert("You need to login first");
    window.location.href = "./pages/login-register.html";
  } else {
    let clickedId = this.id;
    let currentUserId = usersId.indexOf(currentUser);
    let currentUserCartItems = usersDetails[currentUserId].cartItems;
    let currentUserEachItemCount = usersDetails[currentUserId].eachItemCount;
    if (currentUserCartItems.includes(clickedId)) {
      // let likedIndex = userLikedItems.indexOf(productList[this.id]);
      let likedIndex = currentUserCartItems.indexOf(clickedId);
      currentUserCartItems.splice(likedIndex, 1);
      // currentUserLikedItems.splice(this.id, 1);
      currentUserEachItemCount.splice(this.id, 1);
      // localStorage.setItem("eachItemCount", JSON.stringify(eachItemCount));
      this.style.color = "grey";
      usersDetails[currentUserId].cartItems = currentUserCartItems;
    } else {
      // userLikedItems.push(productList[this.id]);
      currentUserCartItems.push(clickedId);
      this.style.color = "red";
      usersDetails[currentUserId].cartItems = currentUserCartItems;
      // for (let i = 0; i < currentUserCartItems.length; i++) {
      // if (eachItemCount == null) {
      // let eachItemCount = [];
      currentUserEachItemCount.push(1);
      // localStorage.setItem("eachItemCount", JSON.stringify(eachItemCount));
      // } else {
      // eachItemCount.push(1);
      // localStorage.setItem("eachItemCount", JSON.stringify(eachItemCount));
      // }
      // }
    }
    console.log(currentUserEachItemCount);
    // localStorage.setItem(currentUserLikedItems,);
    console.log(usersDetails[currentUserId].cartItems);
    itemInCartH5.textContent = usersDetails[currentUserId].cartItems.length;
    // console.log(eachItemCount);
    localStorage.setItem("storedEmails", JSON.stringify(usersId));
    localStorage.setItem("storedDetails", JSON.stringify(usersDetails));
    // localStorage.setItem("eachCountItems", JSON.stringify(eachItemCount));
    location.reload();
  }
}

let GetItemsCount = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser != "" && currentUser != null) {
    let currentUserId = usersId.indexOf(currentUser);
    let currentUserCartItems = usersDetails[currentUserId].cartItems;
    console.log(currentUserCartItems);
    for (let i = 0; i < currentUserCartItems.length; i++) {}
  }
};

// ****************************************************

// ****************************************************

// CHECK IF A USER IS LOGGED IN
let CheckLoginStatus = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser != null) {
    if (currentUser == "") {
      notLogedinIconDiv.style.display = "flex";
      loggedinIconDiv.style.display = "none";
    } else {
      let currentUserFirstLetter = currentUser.charAt(0).toUpperCase();
      loggedinIconText.textContent = currentUserFirstLetter;
      notLogedinIconDiv.style.display = "none";
      loggedinIconDiv.style.display = "flex";
    }
  } else {
    notLogedinIconDiv.style.display = "flex";
    loggedinIconDiv.style.display = "none";
  }
};

// ****************************************************

// ****************************************************

// DIRECTS USER TO LOGIN OR GOTO CART OR PROFILE
userIconDiv.onclick = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "" || currentUser == null) {
    window.location.href = "./pages/login-register.html";
  } else {
    if (userOptions.style.display == "none") {
      userOptions.style.display = "flex";
    } else {
      userOptions.style.display = "none";
    }
  }
};

// ****************************************************

// ****************************************************

// TAKE USER TO CART
gotoCart.onclick = () => {
  window.location.href = "./pages/cart.html";
};

// ****************************************************

// ****************************************************

// TAKE USER TO PROFILE
gotoProfile.onclick = () => {
  window.location.href = "./pages/profile.html";
};

// ****************************************************

// ****************************************************

// BLUR AND UNBLUR BACKGROUND
let pageContent = document.querySelector(".page-content");
let BlurBackground = () => {
  pageContent.style.display = "none";
};

let UnBlurBackground = () => {
  pageContent.style.display = "flex";
};

// ************************************************

// ************************************************

// ERROR ALERT
let errorDiv = document.querySelector(".error-alert");
let errorMsg = document.querySelector(".error-alert h4");
let errorCloseBtn = document.querySelector(".error-alert button");
let errorIcon = document.querySelector(".error-icon");
let successIcon = document.querySelector(".success-icon");

let MsgAlert = (errMsg, type) => {
  errorMsg.innerHTML = errMsg;
  errorDiv.style.display = "flex";

  if (type == "success") {
    errorIcon.style.display = "none";
    successIcon.style.display = "flex";
    errorMsg.style.color = "green";
    errorCloseBtn.style.backgroundColor = "green";
  } else {
    errorIcon.style.display = "flex";
    successIcon.style.display = "none";
    errorMsg.style.color = "red";
    errorCloseBtn.style.backgroundColor = "red";
  }

  errorCloseBtn.onclick = () => {
    // errorDiv.removeChild(errorIcon);
    errorDiv.style.display = "none";
  };
};

// ************************************************

// ************************************************

// LOGOUT USER

let SetCurrentUserEmpty = () => {
  let currentUser = "";
  localStorage.setItem("currentUser", currentUser);
};

logOut.onclick = () => {
  SetCurrentUserEmpty();
  MsgAlert("You have successfyly logout", "success");
  setTimeout(() => {
    location.reload();
  }, 3000);
};

export { ShowProduct };
