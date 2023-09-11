import "./soccer.js";
import "./world.js";
import "./israel.js";
import "./food.js";
import "./celebs.js";
import "./professions.js";

window.addEventListener("load", () => {
  let mainpage = document.querySelector("#mainpage");
  let soccer = document.querySelector("#soccer");
  let israel = document.querySelector("#israel");
  let world = document.querySelector("#world");
  let food = document.querySelector("#food");
  let celebs = document.querySelector("#celebrities");
  let profesh = document.querySelector("#professions");
  let trivia = document.querySelectorAll(".trivia");
  let soccerbtn = trivia[0];
  let worldbtn = trivia[1];
  let israelbtn = trivia[2];
  let foodbtn = trivia[3];
  let celebsbtn = trivia[4];
  let profeshbtn = trivia[5];
  const onlymain = () => {
    mainpage.style.display = "block";
    soccer.style.display = "none";
    world.style.display = "none";
    food.style.display = "none";
    celebs.style.display = "none";
    israel.style.display = "none";
    profesh.style.display = "none";
  };
  const onlysoccer = () => {
    mainpage.style.display = "none";
    soccer.style.display = "block";
    world.style.display = "none";
    food.style.display = "none";
    celebs.style.display = "none";
    israel.style.display = "none";
    profesh.style.display = "none";
  };
  const onlyworld = () => {
    mainpage.style.display = "none";
    soccer.style.display = "none";
    world.style.display = "block";
    food.style.display = "none";
    celebs.style.display = "none";
    israel.style.display = "none";
    profesh.style.display = "none";
  };
  const onlyisrael = () => {
    mainpage.style.display = "none";
    soccer.style.display = "none";
    world.style.display = "none";
    food.style.display = "none";
    celebs.style.display = "none";
    israel.style.display = "block";
    profesh.style.display = "none";
  };
  const onlyfood = () => {
    mainpage.style.display = "none";
    soccer.style.display = "none";
    world.style.display = "none";
    food.style.display = "block";
    celebs.style.display = "none";
    israel.style.display = "none";
    profesh.style.display = "none";
  };
  const onlycelebs = () => {
    mainpage.style.display = "none";
    soccer.style.display = "none";
    world.style.display = "none";
    food.style.display = "none";
    celebs.style.display = "block";
    israel.style.display = "none";
    profesh.style.display = "none";
  };
  const onlyprofesh = () => {
    mainpage.style.display = "none";
    soccer.style.display = "none";
    world.style.display = "none";
    food.style.display = "none";
    celebs.style.display = "none";
    israel.style.display = "none";
    profesh.style.display = "block";
  };
  onlymain();
  soccerbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlysoccer();
      document.body.style.cursor = "auto";
    }, 500);
  });
  worldbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlyworld();
      document.body.style.cursor = "auto";
    }, 500);
  });
  israelbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlyisrael();
      document.body.style.cursor = "auto";
    }, 500);
  });
  foodbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlyfood();
      document.body.style.cursor = "auto";
    }, 500);
  });
  celebsbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlycelebs();
      document.body.style.cursor = "auto";
    }, 500);
  });
  profeshbtn.addEventListener("click", () => {
    document.body.style.cursor = "progress";
    setTimeout(() => {
      onlyprofesh();
      document.body.style.cursor = "auto";
    }, 500);
  });
  let returnbtns = document.querySelectorAll(".return");
  for (let returnbtn of returnbtns) {
    returnbtn.addEventListener("click", () => {
      setTimeout(() => {
        onlymain();
        location.reload();
      }, 500);
    });
  }
});
