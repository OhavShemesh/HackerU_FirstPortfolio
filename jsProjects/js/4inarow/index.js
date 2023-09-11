let bluecounter = document.querySelector(".bluecounter>h1");
bluecounter.innerText = 0;
let redcounter = document.querySelector(".redcounter>h1");
redcounter.innerText = 0;
let bluecircle = document.querySelector(".bluecircle");
let redcircle = document.querySelector(".redcircle");
let cell1 = document.querySelector(".column1");
let cell2 = document.querySelector(".column2");
let cell3 = document.querySelector(".column3");
let cell4 = document.querySelector(".column4");
let cell5 = document.querySelector(".column5");
let cell6 = document.querySelector(".column6");
let cell7 = document.querySelector(".column7");
let cells1 = document.querySelectorAll(".column1>.cell");
let cells2 = document.querySelectorAll(".column2>.cell");
let cells3 = document.querySelectorAll(".column3>.cell");
let cells4 = document.querySelectorAll(".column4>.cell");
let cells5 = document.querySelectorAll(".column5>.cell");
let cells6 = document.querySelectorAll(".column6>.cell");
let cells7 = document.querySelectorAll(".column7>.cell");
let cells = document.querySelectorAll(".cell");
let player = "red";

const whoplays = () => {
  if (player == "red") {
    player = "blue";
  } else {
    player = "red";
  }
};

window.addEventListener("load", () => {
  const restartgame = () => {
    let restartbtn = document.querySelector(".restartbtn");
    restartbtn.addEventListener("click", (e) => {
      player = "red";
      e.preventDefault();
      for (let cell of cells) {
        cell.style.backgroundColor = "";
      }
    });
  };
  const newgame = () => {
    let newgamebtn = document.querySelector(".restartCounter");
    newgamebtn.addEventListener("click", (e) => {
      e.preventDefault();
      player = "red";
      for (let cell of cells) {
        cell.style.backgroundColor = "";
      }
      bluecounter.innerText = 0;
      redcounter.innerText = 0;
    });
  };
  const changestart = () => {
    redcircle.addEventListener("click", () => {
      player = "red";
    });
    bluecircle.addEventListener("click", () => {
      player = "blue";
    });
  };
  const run = () => {
    setInterval(() => {
      rules();
    }, 100);
  };

  cell1.addEventListener("click", () => {
    whoplays();

    if (cells1[5].style.backgroundColor == "") {
      cells1[5].style.backgroundColor = player;
      return;
    }
    if (cells1[4].style.backgroundColor == "") {
      cells1[4].style.backgroundColor = player;
      return;
    }
    if (cells1[3].style.backgroundColor == "") {
      cells1[3].style.backgroundColor = player;
      return;
    }
    if (cells1[2].style.backgroundColor == "") {
      cells1[2].style.backgroundColor = player;
      return;
    }
    if (cells1[1].style.backgroundColor == "") {
      cells1[1].style.backgroundColor = player;
      return;
    }
    if (cells1[0].style.backgroundColor == "") {
      cells1[0].style.backgroundColor = player;
      return;
    }
  });
  cell2.addEventListener("click", () => {
    whoplays();

    if (cells2[5].style.backgroundColor == "") {
      cells2[5].style.backgroundColor = player;
      return;
    }
    if (cells2[4].style.backgroundColor == "") {
      cells2[4].style.backgroundColor = player;
      return;
    }
    if (cells2[3].style.backgroundColor == "") {
      cells2[3].style.backgroundColor = player;
      return;
    }
    if (cells2[2].style.backgroundColor == "") {
      cells2[2].style.backgroundColor = player;
      return;
    }
    if (cells2[1].style.backgroundColor == "") {
      cells2[1].style.backgroundColor = player;
      return;
    }
    if (cells2[0].style.backgroundColor == "") {
      cells2[0].style.backgroundColor = player;
      return;
    }
  });
  cell3.addEventListener("click", () => {
    whoplays();

    if (cells3[5].style.backgroundColor == "") {
      cells3[5].style.backgroundColor = player;
      return;
    }
    if (cells3[4].style.backgroundColor == "") {
      cells3[4].style.backgroundColor = player;
      return;
    }
    if (cells3[3].style.backgroundColor == "") {
      cells3[3].style.backgroundColor = player;
      return;
    }
    if (cells3[2].style.backgroundColor == "") {
      cells3[2].style.backgroundColor = player;
      return;
    }
    if (cells3[1].style.backgroundColor == "") {
      cells3[1].style.backgroundColor = player;
      return;
    }
    if (cells3[0].style.backgroundColor == "") {
      cells3[0].style.backgroundColor = player;
      return;
    }
  });
  cell4.addEventListener("click", () => {
    whoplays();

    if (cells4[5].style.backgroundColor == "") {
      cells4[5].style.backgroundColor = player;
      return;
    }
    if (cells4[4].style.backgroundColor == "") {
      cells4[4].style.backgroundColor = player;
      return;
    }
    if (cells4[3].style.backgroundColor == "") {
      cells4[3].style.backgroundColor = player;
      return;
    }
    if (cells4[2].style.backgroundColor == "") {
      cells4[2].style.backgroundColor = player;
      return;
    }
    if (cells4[1].style.backgroundColor == "") {
      cells4[1].style.backgroundColor = player;
      return;
    }
    if (cells4[0].style.backgroundColor == "") {
      cells4[0].style.backgroundColor = player;
      return;
    }
  });
  cell5.addEventListener("click", () => {
    whoplays();

    if (cells5[5].style.backgroundColor == "") {
      cells5[5].style.backgroundColor = player;
      return;
    }
    if (cells5[4].style.backgroundColor == "") {
      cells5[4].style.backgroundColor = player;
      return;
    }
    if (cells5[3].style.backgroundColor == "") {
      cells5[3].style.backgroundColor = player;
      return;
    }
    if (cells5[2].style.backgroundColor == "") {
      cells5[2].style.backgroundColor = player;
      return;
    }
    if (cells5[1].style.backgroundColor == "") {
      cells5[1].style.backgroundColor = player;
      return;
    }
    if (cells5[0].style.backgroundColor == "") {
      cells5[0].style.backgroundColor = player;
      return;
    }
  });
  cell6.addEventListener("click", () => {
    whoplays();

    if (cells6[5].style.backgroundColor == "") {
      cells6[5].style.backgroundColor = player;
      return;
    }
    if (cells6[4].style.backgroundColor == "") {
      cells6[4].style.backgroundColor = player;
      return;
    }
    if (cells6[3].style.backgroundColor == "") {
      cells6[3].style.backgroundColor = player;
      return;
    }
    if (cells6[2].style.backgroundColor == "") {
      cells6[2].style.backgroundColor = player;
      return;
    }
    if (cells6[1].style.backgroundColor == "") {
      cells6[1].style.backgroundColor = player;
      return;
    }
    if (cells6[0].style.backgroundColor == "") {
      cells6[0].style.backgroundColor = player;
      return;
    }
  });
  cell7.addEventListener("click", () => {
    whoplays();

    if (cells7[5].style.backgroundColor == "") {
      cells7[5].style.backgroundColor = player;
      return;
    }
    if (cells7[4].style.backgroundColor == "") {
      cells7[4].style.backgroundColor = player;
      return;
    }
    if (cells7[3].style.backgroundColor == "") {
      cells7[3].style.backgroundColor = player;
      return;
    }
    if (cells7[2].style.backgroundColor == "") {
      cells7[2].style.backgroundColor = player;
      return;
    }
    if (cells7[1].style.backgroundColor == "") {
      cells7[1].style.backgroundColor = player;
      return;
    }
    if (cells7[0].style.backgroundColor == "") {
      cells7[0].style.backgroundColor = player;
      return;
    }
  });
  const rules = () => {
    let winCombos = [
      //*columns
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [6, 7, 8, 9],
      [7, 8, 9, 10],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [13, 14, 15, 16],
      [14, 15, 16, 17],
      [18, 19, 20, 21],
      [19, 20, 21, 22],
      [20, 21, 22, 23],
      [24, 25, 26, 27],
      [25, 26, 27, 28],
      [26, 27, 28, 29],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [32, 33, 34, 35],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],
      //*rows
      [0, 6, 12, 18],
      [6, 12, 18, 24],
      [12, 18, 24, 30],
      [18, 24, 30, 36],
      [1, 7, 13, 19],
      [7, 13, 19, 25],
      [13, 19, 25, 31],
      [19, 25, 31, 37],
      [2, 8, 14, 20],
      [8, 14, 20, 26],
      [14, 20, 26, 32],
      [20, 26, 32, 38],
      [3, 9, 15, 21],
      [9, 15, 21, 27],
      [15, 21, 27, 33],
      [21, 27, 33, 39],
      [4, 10, 16, 22],
      [10, 16, 22, 28],
      [16, 22, 28, 34],
      [22, 28, 34, 40],
      [5, 11, 17, 23],
      [11, 17, 23, 29],
      [17, 23, 29, 35],
      [23, 29, 35, 41],
      //*diagonal
      [0, 7, 14, 21],
      [1, 8, 15, 22],
      [2, 9, 16, 23],
      [6, 13, 20, 27],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
      [14, 21, 28, 35],
      [18, 25, 32, 39],
      [19, 26, 33, 40],
      [20, 27, 34, 41],
      [3, 8, 13, 18],
      [4, 9, 14, 19],
      [5, 10, 15, 20],
      [9, 14, 19, 24],
      [10, 15, 20, 25],
      [11, 16, 21, 26],
      [15, 20, 25, 30],
      [16, 21, 26, 31],
      [17, 22, 27, 32],
      [21, 26, 31, 36],
      [22, 27, 32, 37],
      [23, 28, 33, 38],
    ];
    for (let combo of winCombos) {
      let [a, b, c, d] = combo;
      if (
        cells[a].style.backgroundColor != "" &&
        cells[a].style.backgroundColor == cells[b].style.backgroundColor &&
        cells[b].style.backgroundColor == cells[c].style.backgroundColor &&
        cells[c].style.backgroundColor == cells[d].style.backgroundColor
      ) {
        setTimeout(() => {
          for (let cell of cells) {
            cell.style.backgroundColor = "";
          }
          if (player == "red") {
            alert("Red Won");
            redcounter.innerText++;
          } else {
            alert("Blue Won");
            bluecounter.innerText++;
          }
          player = "blue";
        }, 10);
      }
    }
  };

  run();
  rules();
  whoplays();
  changestart();
  newgame();
  restartgame();
});
