let soccerQarr = [
  "Who is the richest person in the world?",
  "Who is the richest actor in the world?",
  "Who is the richest singer in the world?",
  "Who is the richest soccer player in the world",
  "Who is the lead actor in wolf of wall street?",
  "Who is the lead actor in oppenheimer?",
];

let soccerAarr = [
  ["Elon Musk", "Bill Gates", "Jeff Bezos", "Larry Page"],
  ["Jami Gertz", "Tyler Perry", "Jerry Seinfeld", "Dwayne Johnson"],
  ["Jay-Z", "Rihanna", "Andrew Lloyd Webber", "Paul McCartney"],
  ["Cristiano Ronaldo", "David Beckham", "Dave Whelan", "Neymar"],
  ["Leonardo DiCaprio", "Jordan Belfort", "Jonah Hill", "Cristin Milioti"],
  ["Cillian Murphy", "Florence Pugh", "Robert Downey Jr.", "Emily Blunt"],
];

const correctAnswers = [
  "Elon Musk",
  "Jami Gertz",
  "Jay-Z",
  "Cristiano Ronaldo",
  "Leonardo DiCaprio",
  "Cillian Murphy",
];

let timerplace = document.querySelector(".timer");
let answers = document.querySelectorAll(".celebrities");
let rightcounter = document.querySelector(".celebritiesrightanswers");
rightcounter.innerHTML = 0;
let wrongcounter = document.querySelector(".celebritieswronganswers");
wrongcounter.innerHTML = 0;
let question = document.querySelector(".celebritiesqu>h1");
let qnumberarr = [0, 1, 2, 3, 4, 5];
let scorepage = document.querySelector(".celebritiesgameended");
let mainpage = document.querySelector(".celebritiesgame");
let finalright = document.querySelector(".celebritiesright");
let finalwrong = document.querySelector(".celebritieswrong");
let finalavg = document.querySelector(".celebritiesavg");
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
