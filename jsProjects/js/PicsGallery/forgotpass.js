let username = document.querySelector(".changepassusername");
let oldpassword = document.querySelector(".changepassold");
let newpassword = document.querySelector(".changepassnew");
let savedusernames = JSON.parse(localStorage.getItem("usernames"));
let savedpasswords = JSON.parse(localStorage.getItem("passwords"));
let error = document.createElement("p");

window.addEventListener("load", () => {
  document
    .querySelector(".changepasswordbtn")
    .addEventListener("click", (e) => {
      let index = 0;
      e.preventDefault();
      let placeerror = document.querySelector(".changepasssecond");
      if (
        username.value.length == 0 ||
        oldpassword.value.length == 0 ||
        newpassword.value.length == 0
      ) {
        placeerror.appendChild(error);
        error.style.color = "red";
        error.innerText = "Fill All Areas";
        error.className = "error";
      } else if (
        username.value.length <= 4 ||
        oldpassword.value.length <= 7 ||
        newpassword.value.length <= 7
      ) {
        placeerror.appendChild(error);
        error.style.color = "red";
        error.innerText = "One Or More Of The Details Are Wrong";
        error.className = "error";
      } else {
        error.remove();
        for (let savedusername of savedusernames) {
          if (savedusername == username.value) {
            index = savedusernames.indexOf(savedusername);
            let foundpass = false;
            if (savedpasswords[index] == oldpassword.value) {
              foundpass = true;
            } else {
              alert("wrong Pass");
            }
            if (foundpass) {
              alert("password Changed");
              savedpasswords.splice(index, 1);
              savedpasswords.splice(index, 0, newpassword.value);
              localStorage.setItem("passwords", JSON.stringify(savedpasswords));
            }

          }
        }
      }
    });
});
