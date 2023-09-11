let soccerQarr = [
  "What is the main ingridient in Falafel?",
  "What is the main ingridient in Coleslaw?",
  "Which type of cheese is known for its strong aroma and flavor?",
  "What is the main ingredient in traditional Japanese miso soup?",
  "What is the primary grain used to make traditional Italian risotto?",
  "What is the traditional food in thailand?",
];

let soccerAarr = [
  ["Hummus", "Paprika", "Corn", "Potato"],
  ["Cabbage", "Cucamber", "Tomata", "Lemon"],
  ["Cheddar", "Mozzarella", "Brie", "Roquefort"],
  ["Seaweed", "Tofu", "Rice", "Miso paste"],
  ["Quinoa", "Barley", "Arborio rice", "Couscous"],
  ["Sushi", "Pad Thai", "Tacos", "Croissant"],
];

const correctAnswers = [
  "Hummus",
  "Cabbage",
  "Roquefort",
  "Miso paste",
  "Arborio rice",
  "Pad Thai",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".food");
let rightcounter = document.querySelector(".foodrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".foodwronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".foodqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".foodgameended");
let mainpage = document.querySelector(".foodgame");
let finalright = document.querySelector(".foodright");
let finalwrong = document.querySelector(".foodwrong");
let finalavg = document.querySelector(".foodavg");
let qnumber;

window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getqnumber = () => {
    qnumber = qnumberarr.splice(getRandomInt(0, qnumberarr.length), 1)[0];
  };

  const givequestion = () => {
    question.innerHTML = soccerQarr[qnumber];
  };

  const getnumber = () => {
    let arr = soccerAarr[qnumber].slice();
    for (let i = 0; i < 4; i++) {
      let randomNum = getRandomInt(0, arr.length);
      answers[i].innerHTML = arr.splice(randomNum, 1);
    }
  };

  const gameended = () => {
    if (qnumberarr.length == 0) {
      alert("Game Ended");
      mainpage.style.display = "none";
      scorepage.style.display = "block";
      finalright.innerHTML = rightcounter.innerHTML;
      finalwrong.innerHTML = wrongcounter.innerHTML;
      let calcavg = 100 - (wrongcounter.innerHTML * 100) / 15;
      finalavg.innerHTML = parseInt(calcavg) + "/100";
    }
  };

  for (let answer of answers) {
    answer.addEventListener("click", (e) => {
      if (e.target.innerHTML === correctAnswers[qnumber]) {
        e.target.style.backgroundColor = "green";
        setTimeout(() => {
          rightcounter.innerHTML++;
          if (qnumberarr.length > 0) {
            getqnumber();
            givequestion();
            getnumber();
          } else {
            gameended();
          }
          for (let answer of answers) {
            answer.style.backgroundColor = "";
          }
        }, 500);
      } else {
        e.target.style.backgroundColor = "red";
        wrongcounter.innerHTML++;
      }
    });
  }

  getqnumber();
  givequestion();
  getnumber();
});
