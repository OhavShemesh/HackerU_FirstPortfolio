let soccerQarr = [
  "How many players are on the field at once?",
  "Which team won the most world cups?",
  "What colors are Barcelona's uniform?",
  "Who is the most wealthy soccer player in the world?",
  "How many referees are on the field?",
  "Who holds the record for the most goals scored in a single calendar year?",
];

let soccerAarr = [
  ["22", "11", "13", "25"],
  ["Brazil", "Argentina", "Spain", "Israel"],
  ["Blue and red", "Red and white", "Blue and yellow", "Green and black"],
  ["Cristiano Ronaldo", "David Beckham", "Dave Whelan", "Neymar"],
  ["3", "5", "1", "7"],
  ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Eusebio"],
];

const correctAnswers = [
  "22",
  "Brazil",
  "Blue and red",
  "Cristiano Ronaldo",
  "3",
  "Lionel Messi",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".soccer");
let rightcounter = document.querySelector(".soccerrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".soccerwronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".soccerqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".soccergameended");
let mainpage = document.querySelector(".soccergame");
let finalright = document.querySelector(".soccerright");
let finalwrong = document.querySelector(".soccerwrong");
let finalavg = document.querySelector(".socceravg");
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
