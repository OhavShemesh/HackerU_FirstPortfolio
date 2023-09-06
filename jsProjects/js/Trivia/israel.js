let soccerQarr = [
  "What is the lowest place in Israel?",
  "What is the capital city of Israel?",
  "Which is the largest city in Israel",
  "What colors are the Israeli flag?",
  "Which Israeli actress gained international fame for her role in the movie Wonder Woman?",
  "What is the name of the tallest mountain in Israel?",
];

let soccerAarr = [
  ["Kinneret Sea", "Mediterranean Sea", "Tel Aviv", "The Dead Sea"],
  ["Tel Aviv", "Jerusalem", "Petah Tiqua", "Haifa"],
  ["Tel Aviv", "Jerusalem", "Petah Tiqua", "Haifa"],
  ["Red and yellow", "Blue and white", "White and black", "white and red"],
  ["Gal Gadot", "Natalie Portman", "Noa Tishby", "Ayelet Zurer"],
  ["Mount Hermon", "Mount Tavor", "Mount Meron", "Mount Carmel"],
];

const correctAnswers = [
  "The Dead Sea",
  "Jerusalem",
  "Jerusalem",
  "Blue and white",
  "Gal Gadot",
  "Mount Hermon",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".israel");
let rightcounter = document.querySelector(".israelrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".israelwronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".israelqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".israelgameended");
let mainpage = document.querySelector(".israelgame");
let finalright = document.querySelector(".israelright");
let finalwrong = document.querySelector(".israelwrong");
let finalavg = document.querySelector(".israelavg");
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
