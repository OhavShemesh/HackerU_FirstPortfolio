let soccerQarr = [
  "Who build houses?",
  "Who doesn't teach?",
  "Who makes food in a resturant?",
  "Who arrest criminals?",
  "Who  perform on a stage?",
  "Who is fishing fishes?",
];

let soccerAarr = [
  ["Builder", "Chef", "Farmer", "Teacher"],
  ["Kindergarten Assistant", "Chef", "Kindergarten teacher", "Teacher"],
  ["Builder", "Chef", "Farmer", "Teacher"],
  ["Firefighter", "Police Officer", "Teacher", "Chef"],
  ["Firefighter", "Police Officer", "Singer", "Teacher"],
  ["Fisherman", "Police Officer", "Chef", "Teacher"],
];

const correctAnswers = [
  "Builder",
  "Chef",
  "Chef",
  "Police Officer",
  "Singer",
  "Fisherman",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".professions");
let rightcounter = document.querySelector(".professionsrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".professionswronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".professionsqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".professionsgameended");
let mainpage = document.querySelector(".professionsgame");
let finalright = document.querySelector(".professionsright");
let finalwrong = document.querySelector(".professionswrong");
let finalavg = document.querySelector(".professionsavg");
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
