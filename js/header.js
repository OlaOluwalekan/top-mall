let currentUser = "";

let pagesHeader = document.createElement("header");

// CREATE HEADER TOP MALL LOGO IMAGE
let topMallLogo = document.createElement("div");
let topMallLogoImg = document.createElement("img");
topMallLogoImg.src = "./images/top-mall-logo.png";
topMallLogo.appendChild(topMallLogoImg);
topMallLogo.classList.add("top-mall-logo");

// CREATE SEARCHBAR WITH SEARCH ICON
let searchBarDiv = document.createElement("div");
let searchIconDiv = document.createElement("div");
let searchIcon = document.createElement("i");
searchIcon.classList.add("fas", "fa-search");
searchIconDiv.classList.add("search-icon");

let searchInput = document.createElement("input");
searchInput.placeholder = "Search Top Mall";
searchInput.type = "text";

searchIconDiv.appendChild(searchIcon);
searchBarDiv.appendChild(searchIconDiv);
searchBarDiv.appendChild(searchInput);
searchBarDiv.classList.add("search-bar");

// CREATE HELP AND USER ICONS AND DIVS
let helpAndUserDiv = document.createElement("div");
let helpIconDiv = document.createElement("div");
let helpIcon = document.createElement("i");
helpIcon.classList.add("fas", "fa-question");

let userIconDiv = document.createElement("div");
let notLogedinIconDiv = document.createElement("div");
let loggedinIconDiv = document.createElement("div");
let notLogedinIcon = document.createElement("i");
let loggedinIcon = document.createElement("h1");
let loggedinIconText = document.createTextNode("T");
userIconDiv.appendChild(notLogedinIconDiv);
userIconDiv.appendChild(loggedinIconDiv);
notLogedinIconDiv.appendChild(notLogedinIcon);
loggedinIcon.appendChild(loggedinIconText);
loggedinIconDiv.appendChild(loggedinIcon);
notLogedinIcon.classList.add("fas", "fa-user");

helpAndUserDiv.appendChild(helpIconDiv);
helpAndUserDiv.appendChild(userIconDiv);
helpIconDiv.appendChild(helpIcon);
helpAndUserDiv.classList.add("help-user");
helpIconDiv.classList.add("help-icon");
userIconDiv.classList.add("user-icon");
loggedinIconDiv.classList.add("loggedin-user-icon");

// CREATE USER OPTIONS FOR USER TO GOTO LOGIN OR GOTO CART/PROFILE
let userOptions = document.createElement("div");
let cartOverview = document.createElement("div");
let gotoProfile = document.createElement("div");
let logOut = document.createElement("div");

// CART OVERVIEW
let cartOverviewNo = document.createElement("div");
let gotoCart = document.createElement("div");
cartOverview.appendChild(cartOverviewNo);
cartOverview.appendChild(gotoCart);
cartOverview.classList.add("cart-overview");
cartOverviewNo.classList.add("cart-overview-no");
gotoCart.classList.add("goto-cart");

let itemInCart = document.createElement("div");
let itemInCartH5 = document.createElement("h5");
let itemInCartText = document.createTextNode("0");
let cartIconDiv = document.createElement("div");
let cartIcon = document.createElement("i");
cartOverviewNo.appendChild(itemInCart);
cartOverviewNo.appendChild(cartIconDiv);
itemInCart.appendChild(itemInCartH5);
itemInCartH5.appendChild(itemInCartText);
cartIconDiv.appendChild(cartIcon);
cartIcon.classList.add("fas", "fa-cart-plus");
itemInCart.classList.add("item-in-cart");
cartIconDiv.classList.add("cart-icon");

let gotoCartBtn = document.createElement("button");
let gotoCartBtnText = document.createTextNode("View Cart");
gotoCartBtn.appendChild(gotoCartBtnText);
gotoCart.appendChild(gotoCartBtn);

// VIEW PROFILE
let gotoProfileH4 = document.createElement("h4");
let gotoProfileText = document.createTextNode("Profile");
gotoProfileH4.appendChild(gotoProfileText);
gotoProfile.appendChild(gotoProfileH4);
gotoProfile.classList.add("goto-profile");

// LOGOUT
let logOutH4 = document.createElement("h4");
let logOutText = document.createTextNode("Log Out");
logOutH4.appendChild(logOutText);
logOut.appendChild(logOutH4);
logOut.classList.add("log-out");

userOptions.appendChild(cartOverview);
userOptions.appendChild(gotoProfile);
userOptions.appendChild(logOut);

userOptions.classList.add("user-options");

// APPEND ALL TO HEADER
pagesHeader.appendChild(topMallLogo);
pagesHeader.appendChild(searchBarDiv);
pagesHeader.appendChild(helpAndUserDiv);
pagesHeader.appendChild(userOptions);
pagesHeader.classList.add("main-header");

// EVENT LISTENERS

userIconDiv.onclick = () => {
  // if (userOptions.style.display == "none") {
  //   userOptions.style.display == "flex";
  // } else {
  //   userOptions.style.display = "none";
  // }
  // console.log(userOptions);
};

export {
  pagesHeader,
  userOptions,
  userIconDiv,
  notLogedinIconDiv,
  loggedinIconDiv,
  loggedinIconText,
  gotoCart,
  gotoProfile,
  logOut,
  itemInCartH5,
};
