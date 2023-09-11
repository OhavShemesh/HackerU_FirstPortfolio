import "./login.js";
import "./forgotpass.js";
import "./gallery.js";
window.addEventListener("load", () => {
  let fullname = document.querySelector(".fullname");
  let username = document.querySelector(".username");
  let password = document.querySelector(".password");
  const is_login = () => {
    if (localStorage.getItem("is_login") == "true") {
      mainpage();
    } else {
      return;
    }
  };
  const login = () => {
    document.querySelector(".switchlogin").addEventListener("click", () => {
      let loginform = document.querySelector(".login");
      let registerform = document.querySelector(".register");
      let gallery = document.querySelector(".Gallery");
      document.body.style.cursor = "progress";
      setTimeout(() => {
        gallery.style.display = "none";
        loginform.style.display = "flex";
        registerform.style.display = "none";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };
  const register = () => {
    document.querySelector(".switchregister").addEventListener("click", () => {
      let loginform = document.querySelector(".login");
      let registerform = document.querySelector(".register");
      let gallery = document.querySelector(".Gallery");
      document.body.style.cursor = "progress";
      setTimeout(() => {
        loginform.style.display = "none";
        registerform.style.display = "flex";
        document.body.style.cursor = "auto";
        gallery.style.display = "none";
      }, 1000);
    });
  };
  const changepassword = () => {
    document.querySelector(".forgotpass").addEventListener("click", () => {
      let loginform = document.querySelector(".login");
      let registerform = document.querySelector(".register");
      let changepassform = document.querySelector(".changepass");
      let gallery = document.querySelector(".Gallery");
      document.body.style.cursor = "progress";
      setTimeout(() => {
        loginform.style.display = "none";
        registerform.style.display = "none";
        changepassform.style.display = "flex";
        document.body.style.cursor = "auto";
        gallery.style.display = "none";
      }, 1000);
    });
  };
  const mainpage = () => {
    let loginform = document.querySelector(".login");
    let registerform = document.querySelector(".register");
    let changepassform = document.querySelector(".changepass");
    let gallery = document.querySelector(".Gallery");
    document.body.style.cursor = "progress";
    setTimeout(() => {
      loginform.style.display = "none";
      registerform.style.display = "none";
      changepassform.style.display = "none";
      gallery.style.display = "block";
      document.body.style.cursor = "auto";
    }, 1000);
  };
  class Register {
    fullnames = [];
    usernames = [];
    passwords = [];
    constructor() {
      this.fullname = fullname;
      this.username = username;
      this.password = password;
    }
    save() {
      let errorplace3 = document.querySelector(".second");
      document.querySelector(".registerbtn").addEventListener("click", (e) => {
        e.preventDefault();
        let error = document.createElement("p");
        let error2 = document.createElement("p");
        let error3 = document.createElement("p");
        let error4 = document.createElement("p");
        if (errorplace3.querySelector("p")) {
          errorplace3.querySelector("p").remove();
        }
        if (
          fullname.value.length == 0 ||
          username.value.length == 0 ||
          password.value.length == 0
        ) {
          let errorplace3 = document.querySelector(".second");
          errorplace3.appendChild(error4);
          error4.style.color = "red";
          error4.innerText = "Fill All Areas";
          error4.style.fontSize = "1rem";
        }

        if (fullname.value && username.value && password.value) {
          let errorplace = document.querySelector(".name");
          let errorplace2 = document.querySelector(".first");
          let errorplace3 = document.querySelector(".second");

          if (errorplace.querySelector("p")) {
            errorplace.querySelector("p").remove();
          }
          if (errorplace3.querySelector("p")) {
            errorplace3.querySelector("p").remove();
          }
          if (errorplace2.querySelector("p")) {
            errorplace2.querySelector("p").remove();
          }
          if (fullname.value.length <= 3) {
            errorplace.appendChild(error);
            error.innerText = "Full Name Must Be 4 Letters Or More";
            error.style.color = "red";
            error.style.fontSize = "1rem";
          } else {
            error.remove();
          }
          if (username.value.length <= 4) {
            let errorplace = document.querySelector(".first");
            errorplace.appendChild(error2);
            error2.innerText = "Username Must Be 5 Letters Or More";
            error2.style.color = "red";
            error2.style.fontSize = "1rem";
          } else {
            error2.remove();
          }
          if (password.value.length <= 7) {
            let errorplace = document.querySelector(".second");
            errorplace.appendChild(error3);
            error3.innerText = "Password Must Be 8 Letters Or More";
            error3.style.color = "red";
            error3.style.fontSize = "1rem";
          }
          if (
            fullname.value.length >= 4 &&
            username.value.length >= 5 &&
            password.value.length >= 8
          ) {
            this.fullnames = [...this.fullnames, fullname.value];
            this.usernames = [...this.usernames, username.value];
            this.passwords = [...this.passwords, password.value];
            localStorage.setItem("fullnames", JSON.stringify(this.fullnames));
            localStorage.setItem("usernames", JSON.stringify(this.usernames));
            localStorage.setItem("passwords", JSON.stringify(this.passwords));
            localStorage.setItem("is_login", true);
            mainpage();
          }
        }
      });
    }
  }
  let u1 = new Register();
  u1.save();
  login();
  register();
  changepassword();
  is_login();
});
