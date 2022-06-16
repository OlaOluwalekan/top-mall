// import { productList } from "./products";

class Users {
  constructor(email, fullName, PhoneNumber, password, loginStatus, cartItems) {
    this.email = email;
    this.fullName = fullName;
    this.PhoneNumber = PhoneNumber;
    this.password = password;
    this.loginStatus = loginStatus;
    this.cartItems = cartItems;
  }
}

export { Users };
