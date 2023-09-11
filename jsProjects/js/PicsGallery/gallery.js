window.addEventListener("load", () => {
  let likebtns = document.querySelectorAll(".likebtn");
  let likeinner = document.querySelectorAll(".likecounter");
  let dislikebtns = document.querySelectorAll(".dislikebtn");
  let logoutbtn = document.querySelector(".logout");
  const logout = () => {
    logoutbtn.addEventListener("click", () => {
      localStorage.setItem("is_login", false);
      document.body.style.cursor = "progress";
      setTimeout(() => {
        location.reload();
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };
  const getlikes = () => {
    for (let i = 0; i < likebtns.length; i++) {
      let storedLikeCount = localStorage.getItem(`like${i}`);
      if (storedLikeCount === null) {
        likeinner[i].innerHTML = "0";
      } else {
        likeinner[i].innerHTML = storedLikeCount;
      }

      updateButtonColor(i);
    }
  };

  const updateButtonColor = (index) => {
    let likeCount = parseInt(likeinner[index].innerHTML);
    if (likeCount === 0) {
      likeinner[index].style.color = "";
      likebtns[index].style.color = "";
    } else if (likeCount > 0) {
      likeinner[index].style.color = "red";
      likebtns[index].style.color = "red";
    } else if (likeCount < 0) {
      likeinner[index].style.color = "grey";
      likebtns[index].style.color = "grey";
    }
  };

  const dislike = () => {
    for (let i = 0; i < likebtns.length; i++) {
      dislikebtns[i].addEventListener("click", () => {
        let likecounter = likeinner[i];
        if (likecounter) {
          let currentLikes = parseInt(likecounter.textContent);
          if (!isNaN(currentLikes)) {
            likecounter.textContent = currentLikes - 1;
            updateButtonColor(i);
            setlike();
          }
        }
      });
    }
  };

  const addlike = () => {
    for (let i = 0; i < likebtns.length; i++) {
      likebtns[i].addEventListener("click", () => {
        let likecounter = likeinner[i];
        if (likecounter) {
          let currentLikes = parseInt(likecounter.textContent);
          if (!isNaN(currentLikes)) {
            likecounter.textContent = currentLikes + 1;
            updateButtonColor(i);
            setlike();
          }
        }
      });
    }
  };

  const setlike = () => {
    for (let i = 0; i < likebtns.length; i++) {
      localStorage.setItem(`like${i}`, likeinner[i].innerHTML);
    }
  };

  addlike();
  dislike();
  getlikes();
  logout();
});
