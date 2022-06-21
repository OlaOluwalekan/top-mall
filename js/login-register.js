// import { pagesHeader } from "./header.js";
import { Users } from "./users.js";

let usersId = [];
let usersDetails = [];
// localStorage.setItem("storedEmails", "");
// localStorage.setItem("storedEmails", JSON.stringify(usersId));
// localStorage.setItem("storedDetails", JSON.stringify(usersDetails));

let loginRegDiv = document.querySelector(".login-reg-container");
let loginRegClose = document.querySelector(".close-login-reg");
let loginDiv = document.querySelector(".login-div");
let regDiv = document.querySelector(".register-div");
let gotoLogin = document.querySelector(".goto-login");
let gotoReg = document.querySelector(".goto-register");

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

window.onload = () => {
  LoadUsers();
  // console.log(currentUser);
};

loginRegClose.onclick = () => {
  loginRegDiv.style.display = "none";
  regDiv.style.display = "none";
  loginDiv.style.display = "flex";
  ClearAll();
  window.location.href = "../index.html";
  // UnBlurBackground();
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
          false,
          [],
          []
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
// let loggedinUserIcon = document.querySelector(".loggedin-user-icon");
// let notLoggedinUserIcon = document.querySelector(".not-loggedin-icon");

loginBtn.onclick = () => {
  LogUserIn();
};

let LogUserIn = () => {
  if (userEmailLogin.value == "" || userPassLogin.value == "") {
    MsgAlert("Some required fields are empty");
  } else {
    if (!usersId.includes(userEmailLogin.value.toLowerCase())) {
      MsgAlert("This email is not registered. Please register first");
    } else {
      let indexOfUser = usersId.indexOf(userEmailLogin.value.toLowerCase());
      let correctPassword = usersDetails[indexOfUser].password;
      // console.log(indexOfUser);
      // console.log(correctPassword);
      if (userPassLogin.value == correctPassword) {
        // userLoggedIn = true;
        usersDetails[indexOfUser].loginStatus = true;
        let currentUserEmail = userEmailLogin.value;
        localStorage.setItem("storedDetails", JSON.stringify(usersDetails));
        localStorage.setItem("currentUser", currentUserEmail);
        MsgAlert("Login Successful", "success");
        // loginRegDiv.style.display = "none";
        // regDiv.style.display = "none";
        // loginDiv.style.display = "flex";
        // UnBlurBackground();
        ClearAll();

        // console.log(usersDetails);
        setTimeout(() => {
          window.location.href = "../index.html";
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

export { usersId, usersDetails };
