// import { pagesHeader } from "./header.js";
import { Users } from "./users.js";

// VARIABLES DECLARATION
let userFullName = document.querySelector(".cart-header h1");
let backFromCart = document.querySelector(".back-from-cart");

// ****************************************************

// ****************************************************

// ON LOAD WINDOW
window.onload = () => {
  let currentUser = localStorage.getItem("currentUser");
  if (currentUser == "") {
    document.write("Access Denied! This Page is forbidden");
  }

  SetUser();
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
  console.log(userName);
};

// ****************************************************

// ****************************************************

// GO BACK FROM CART
backFromCart.onclick = () => {
  window.location.href = "../index.html";
};
