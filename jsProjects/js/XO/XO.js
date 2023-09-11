window.addEventListener("load", () => {
  let cells = document.querySelectorAll(".cell");
  let player = "X";
  let restart = document.querySelector(".restart");
  let undo = document.querySelector(".undo");
  let num;
  let scoreX = document.querySelector(".scoreX");
  let scoreO = document.querySelector(".scoreO");
  scoreX.innerHTML = 0;
  scoreO.innerHTML = 0;
  let newgame = document.querySelector(".newgame");
  let gameset = document.querySelector(".gamesettings");
  let setbtn = document.querySelector(".setbtn");
  let gamemode = 1;

  setbtn.addEventListener("click", () => {
    gamemode = gameset.value;
    for (cell of cells) {
      cell.innerHTML = "";
    }
    if (gamemode == 1) {
      player = "X";
    } else if (gamemode == 2) {
      player = "O";
    }
    console.log(gamemode);
    console.log(player);
  });

  const turn = () => {
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }
  };

  const placeXO = () => {
    for (let cell of cells) {
      cell.addEventListener("click", (e) => {
        e.preventDefault();
        if (cell.innerHTML != "") {
          return;
        }
        if (cell.innerHTML == "") {
          cell.innerHTML = player;
        }
        turn();
        setTimeout(() => {
          winrules();
        }, 40);
      });
    }
  };

  const restartbtn = () => {
    restart.addEventListener("click", (e) => {
      e.preventDefault();
      for (let cell of cells) {
        cell.innerHTML = "";
      }
      if (gamemode == 1) {
        player = "X";
      } else if (gamemode == 2) {
        player = "O";
      }
    });
  };

  const winrules = () => {
    if (
      (cells[0].innerHTML != "" &&
        cells[0].innerHTML == cells[1].innerHTML &&
        cells[1].innerHTML == cells[2].innerHTML) ||
      (cells[3].innerHTML != "" &&
        cells[3].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[5].innerHTML) ||
      (cells[6].innerHTML != "" &&
        cells[6].innerHTML == cells[7].innerHTML &&
        cells[7].innerHTML == cells[8].innerHTML) ||
      (cells[0].innerHTML != "" &&
        cells[0].innerHTML == cells[3].innerHTML &&
        cells[3].innerHTML == cells[6].innerHTML) ||
      (cells[1].innerHTML != "" &&
        cells[1].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[7].innerHTML) ||
      (cells[2].innerHTML != "" &&
        cells[2].innerHTML == cells[5].innerHTML &&
        cells[5].innerHTML == cells[8].innerHTML) ||
      (cells[0].innerHTML != "" &&
        cells[0].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[8].innerHTML) ||
      (cells[2].innerHTML != "" &&
        cells[2].innerHTML == cells[4].innerHTML &&
        cells[4].innerHTML == cells[6].innerHTML)
    ) {
      if (player == "O") {
        alert("X Won");
        scoreX.innerHTML++;
      } else {
        alert("O Won");
        scoreO.innerHTML++;
      }
      for (let cell of cells) {
        cell.innerHTML = "";
        if (gamemode == 1) {
          player = "X";
        } else if (gamemode == 2) {
          player = "O";
        }
      }
    } else if (draw()) {
      setTimeout(() => {
        alert("Its a draw");
        for (let cell of cells) {
          cell.innerHTML = "";
        }
        if (gamemode == 1) {
          player = "X";
        } else if (gamemode == 2) {
          player = "O";
        }
      }, 10);
    }
  };

  const draw = () => {
    for (let cell of cells) {
      if (cell.innerHTML == "") {
        return false;
      }
    }
    return true;
  };

  const undobtn = () => {
    cells[0].addEventListener("click", () => {
      num = 0;
    });
    cells[1].addEventListener("click", () => {
      num = 1;
    });
    cells[2].addEventListener("click", () => {
      num = 2;
    });
    cells[3].addEventListener("click", () => {
      num = 3;
    });
    cells[4].addEventListener("click", () => {
      num = 4;
    });
    cells[5].addEventListener("click", () => {
      num = 5;
    });
    cells[6].addEventListener("click", () => {
      num = 6;
    });
    cells[7].addEventListener("click", () => {
      num = 7;
    });
    cells[8].addEventListener("click", () => {
      num = 8;
    });
    undo.addEventListener("click", () => {
      cells[num].innerHTML = "";
      if (player == "X") {
        player = "O";
      } else {
        player = "X";
      }
    });
  };

  const newgamebtn = () => {
    newgame.addEventListener("click", () => {
      scoreO.innerHTML = 0;
      scoreX.innerHTML = 0;
      for (let cell of cells) {
        cell.innerHTML = "";
      }
    });
  };
  newgamebtn();
  undobtn();
  restartbtn();
  placeXO();
});
