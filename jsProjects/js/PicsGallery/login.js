let username = document.querySelector(".loginusername");
let password = document.querySelector(".loginpassword");
let usererror = document.querySelector(".loginsecond");
let error = document.createElement("p");
window.addEventListener("load", () => {
  let savedusernames = JSON.parse(localStorage.getItem("usernames"));
  let savedpasswords = JSON.parse(localStorage.getItem("passwords"));

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

  document.querySelector(".loginbtn").addEventListener("click", (e) => {
    e.preventDefault();
    let founduser = false;
    let foundpass = false;
    for (let savedusername of savedusernames) {
      if (username.value == savedusername) {
        founduser = true;
      }
    }
    for (let savedpassword of savedpasswords) {
      if (password.value == savedpassword) {
        foundpass = true;
      }
    }
    if (foundpass && founduser) {
      mainpage();
      localStorage.setItem("is_login", true);
    } else {
      usererror.appendChild(error);
      error.style.color = "red";
      error.innerText = "Username Or Password Doesn't Match";
    }
  });
});
