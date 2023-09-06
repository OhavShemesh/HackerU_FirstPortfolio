let soccerQarr = [
  "What is the tallest mountain in the world?",
  "Which planet is known as the Red Planet?",
  "Which famous ancient wonder was located in the city of Alexandria, Egypt, and was a towering lighthouse?",
  "Which river is the longest in the world?",
  "Which country is known as the Land of the Rising Sun?",
  "What is the largest mammal on Earth?",
];

let soccerAarr = [
  ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
  ["Venus", "Jupiter", "Mars", "Saturn"],
  [
    "The Colossus of Rhodes",
    "The Hanging Gardens of Babylon",
    "The Mausoleum at Halicarnassus",
    "The Pharos of Alexandria",
  ],
  ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
  ["China", "South Korea", "Japan", "Thailand"],
  ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
];

const correctAnswers = [
  "Mount Everest",
  "Mars",
  "The Pharos of Alexandria",
  "Nile River",
  "Japan",
  "Blue Whale",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".world");
let rightcounter = document.querySelector(".worldrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".worldwronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".worldqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".worldgameended");
let mainpage = document.querySelector(".worldgame");
let finalright = document.querySelector(".worldright");
let finalwrong = document.querySelector(".worldwrong");
let finalavg = document.querySelector(".worldavg");
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
