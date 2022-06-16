import { productList } from "./products.js";
import { Users } from "./users.js";

let contentHeadImageDiv = document.getElementById("contentImage");
let productListDiv = document.querySelector(".product-list");
let userLoggedIn = false;

let contentHeadImage = [
  "./images/content-head-images/girl-colourful.jpg",
  "./images/content-head-images/fastest-dilevery.png",
  "./images/content-head-images/discount.png",
];

let currentUserEmail = "";

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

window.onload = () => {
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

    const productLike = document.createElement("i");
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
    productContainer.id = "product" + i;

    productListDiv.appendChild(productContainer);
    // productContainer.setAttribute("onclick", "ShowProduct()");
    // productContainer.onclick = (this) => {
    //   console.log(this);
    // };

    productLikeDiv.setAttribute("onclick", "AddToLike(this)");
    // console.log(productContainer);
  }

  ChangeImage();
  // AddToProductList();
  // ShowProduct();

  LoadUsers();
  CheckLoginStatus();
  // console.log(currentUserEmail);
};

function ShowProduct(product) {
  console.log(product.id);
}

// LOAD ALL USERS FROM DATABASE
let LoadUsers = () => {
  let storedEmails = JSON.parse(localStorage.getItem("storedEmails"));
  let storedDetails = JSON.parse(localStorage.getItem("storedDetails"));

  for (let i = 0; i < storedEmails.length; i++) {
    usersId.push(storedEmails[i]);
    usersDetails.push(storedDetails[i]);
  }
  console.log(usersId);
  console.log(usersDetails);
};

// CHECK IF A USER IS LOGGED IN
let CheckLoginStatus = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "") {
    notLoggedinUserIcon.style.display = "flex";
    loggedinUserIcon.style.display = "none";
  } else {
    let currentUserFirstLetter = currentUser.charAt(0).toUpperCase();
    loggedinUserIcon.innerHTML = `<h1>${currentUserFirstLetter}</h1>`;
    notLoggedinUserIcon.style.display = "none";
    loggedinUserIcon.style.display = "flex";
  }
};

let userIcon = document.querySelector(".user-icon");
let loginRegDiv = document.querySelector(".login-reg-container");
let loginRegClose = document.querySelector(".close-login-reg");
let loginDiv = document.querySelector(".login-div");
let regDiv = document.querySelector(".register-div");
let gotoLogin = document.querySelector(".goto-login");
let gotoReg = document.querySelector(".goto-register");
let userOptions = document.querySelector(".user-options");

// userIcon.onmouseover = () => {
//   if (userLoggedIn == true) {
//     userOptions.style.display = "flex";
//   }
// };

// userOptions.onmouseout = () => {
//   userOptions.style.display = "none";
// };

userIcon.onclick = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "") {
    loginRegDiv.style.display = "flex";
    BlurBackground();
  } else {
    if (userOptions.style.display == "flex") {
      userOptions.style.display = "none";
    } else {
      userOptions.style.display = "flex";
    }
  }
  // window.scroll = false;
};

loginRegClose.onclick = () => {
  loginRegDiv.style.display = "none";
  regDiv.style.display = "none";
  loginDiv.style.display = "flex";
  ClearAll();
  UnBlurBackground();
};

gotoReg.onclick = () => {
  loginDiv.style.display = "none";
  regDiv.style.display = "flex";
};

gotoLogin.onclick = () => {
  regDiv.style.display = "none";
  loginDiv.style.display = "flex";
};

// REGSITER USERS

let registerBtn = document.querySelector(".register-btn");
let userEmailReg = document.getElementById("userEmailReg");
let userNameReg = document.getElementById("userName");
let userPhoneReg = document.getElementById("userPhone");
let userPassReg = document.getElementById("userPassReg");
let userRePassReg = document.getElementById("userRePass");

let usersId = [];
let usersDetails = [];

registerBtn.onclick = () => {
  if (
    userEmailReg.value == "" ||
    userNameReg.value == "" ||
    userPhoneReg.value == "" ||
    userPassReg.value == "" ||
    userRePassReg.value == ""
  ) {
    MsgAlert("Some require fields are empty", "fa-info");
  } else {
    if (userPassReg.value != userRePassReg.value) {
      MsgAlert("Password does not match");
    } else {
      if (usersId.includes(userEmailReg.value.toLowerCase())) {
        MsgAlert("This email is already registered. Please login");
      } else {
        usersId.push(userEmailReg.value);
        let newUser = new Users(
          userEmailReg.value.toLowerCase(),
          userNameReg.value,
          userPhoneReg.value,
          userPassReg.value,
          false
        );
        usersDetails.push(newUser);
        localStorage.setItem("storedEmails", JSON.stringify(usersId));
        localStorage.setItem("storedDetails", JSON.stringify(usersDetails));
        MsgAlert("Registration Successful", "success");
        ClearAll();
        regDiv.style.display = "none";
        loginDiv.style.display = "flex";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    }
  }
};

// LOGIN USERS
let loginBtn = document.querySelector(".login-btn");
let userEmailLogin = document.getElementById("userEmailLogin");
let userPassLogin = document.getElementById("userPassLogin");
let loggedinUserIcon = document.querySelector(".loggedin-user-icon");
let notLoggedinUserIcon = document.querySelector(".not-loggedin-icon");

loginBtn.onclick = () => {
  if (userEmailLogin.value == "" || userPassLogin.value == "") {
    MsgAlert("Some required fields are empty");
  } else {
    if (!usersId.includes(userEmailLogin.value.toLowerCase())) {
      MsgAlert("This email is not registered. Please register first");
    } else {
      let indexOfUser = usersId.indexOf(userEmailLogin.value.toLowerCase());
      let correctPassword = usersDetails[indexOfUser].password;
      console.log(indexOfUser);
      console.log(correctPassword);
      if (userPassLogin.value == correctPassword) {
        userLoggedIn = true;
        usersDetails[indexOfUser].loginStatus = true;
        currentUserEmail = userEmailLogin.value;
        localStorage.setItem("storedDetails", JSON.stringify(usersDetails));
        localStorage.setItem("currentUser", currentUserEmail);
        MsgAlert("Login Successful", "success");
        loginRegDiv.style.display = "none";
        regDiv.style.display = "none";
        loginDiv.style.display = "flex";
        UnBlurBackground();
        ClearAll();

        console.log(usersDetails);
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else {
        MsgAlert("Invalid password");
      }
    }
  }
};

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

let allInput = document.querySelectorAll(".login-reg-container input");

let ClearAll = () => {
  for (let i = 0; i < allInput.length; i++) {
    allInput[i].value = "";
  }
};

let pageContent = document.querySelector(".page-content");
let BlurBackground = () => {
  pageContent.style.display = "none";
};

let UnBlurBackground = () => {
  pageContent.style.display = "flex";
};

// LOGOUT USER
let logOut = document.querySelector(".log-out");

logOut.onclick = () => {
  currentUserEmail = "";
  localStorage.setItem("currentUser", currentUserEmail);
  MsgAlert("You have successfyly logout", "success");
  setTimeout(() => {
    location.reload();
  }, 3000);
};
