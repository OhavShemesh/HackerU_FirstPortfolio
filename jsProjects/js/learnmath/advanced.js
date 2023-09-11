function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("load", () => {
  let suboradd;
  let num1, num2;
  let problemplace = document.querySelector(".advancedsubproblem>h1");
  let solutionsplace = document.querySelectorAll(".advancedsol");
  let right = document.querySelector(".advancedright");
  let wrong = document.querySelector(".advancedwrong");
  let resetbutton = document.querySelector(".advancedresetbutton");
  let index;
  let rightcount = Number();
  let wrongcount = Number();
  let difficulty = document.querySelector(".advancedselect");

  const suboraddfunc = () => {
    suboradd = getRandomInt(0, 4);
  };

  const setindex = () => {
    index = getRandomInt(0, 5);
  };

  const changeDifficulty = () => {
    difficulty.addEventListener("change", (option) => {
      let selectedoption = option.target.value;
      localStorage.setItem("difficulty", parseInt(selectedoption));
      updateNumbers();
      giveproblem();
      givesolutions();
    });
  };

  const updateNumbers = () => {
    let selectedDifficulty = localStorage.getItem("difficulty");
    selectedDifficulty = parseInt(selectedDifficulty);

    if (selectedDifficulty == 10) {
      num1 = getRandomInt(1, 10);
      num2 = getRandomInt(1, 10);
    }
    if (selectedDifficulty == 50) {
      num1 = getRandomInt(1, 50);
      num2 = getRandomInt(1, 50);
    }
    if (selectedDifficulty == 100) {
      num1 = getRandomInt(1, 100);
      num2 = getRandomInt(1, 100);
    }
    if (selectedDifficulty == 1000) {
      num1 = getRandomInt(1, 1000);
      num2 = getRandomInt(1, 1000);
    }
  };

  const giveproblem = () => {
    if (suboradd == 0) {
      problemplace.innerText = num1 + "+" + num2 + "=";
    }
    if (suboradd == 1) {
      problemplace.innerHTML = num1 + "-" + num2 + "=";
    }
    if (suboradd == 2) {
      problemplace.innerText = num1 + "X" + num2 + "=";
    }
    if (suboradd == 3) {
      problemplace.innerHTML = num1 * num2 + "&divide" + num2 + "=";
    }
  };

  const givesolutions = () => {
    for (let solution of solutionsplace) {
      if (suboradd == 0) {
        solution.innerText = getRandomInt(num1, num2 * 2);
        solutionsplace[index].innerHTML = num1 + num2;
      }
      if (suboradd == 1) {
        solution.innerHTML = getRandomInt(-10, 10);
        solutionsplace[index].innerHTML = num1 - num2;
      }
      if (suboradd == 2) {
        solution.innerHTML = getRandomInt(num1 * 2, num2 * 2);
        solutionsplace[index].innerHTML = num1 * num2;
      }
      if (suboradd == 3) {
        solution.innerHTML = getRandomInt(num1, num2);
        solutionsplace[index].innerHTML = num1;
      }
    }
  };

  const wrongorright = () => {
    for (let solution of solutionsplace) {
      solution.addEventListener("click", () => {
        if (suboradd == 0) {
          if (solution.innerHTML == num1 + num2) {
            solution.style.backgroundColor = "green";
            document.body.style.pointerEvents = "none";
            rightcount++;
            localStorage.setItem("advancedright", rightcount);
            right.innerHTML = rightcount;
            setTimeout(() => {
              for (let sol of solutionsplace) {
                sol.style.backgroundColor = "";
              }
              document.body.style.pointerEvents = "auto";

              suboraddfunc();
              setindex();
              updateNumbers();
              giveproblem();
              givesolutions();
            }, 500);
          } else {
            solution.style.backgroundColor = "red";
            wrongcount++;
            localStorage.setItem("advancedwrong", wrongcount);
            wrong.innerHTML = wrongcount;
          }
        }
        if (suboradd == 1) {
          if (solution.innerHTML == num1 - num2) {
            solution.style.backgroundColor = "green";
            document.body.style.pointerEvents = "none";

            rightcount++;
            localStorage.setItem("advancedright", rightcount);
            right.innerHTML = rightcount;

            setTimeout(() => {
              for (let sol of solutionsplace) {
                sol.style.backgroundColor = "";
                document.body.style.pointerEvents = "auto";
                localStorage.setItem("advancedwrong", wrongcount);
              }
              suboraddfunc();
              setindex();
              updateNumbers();
              giveproblem();
              givesolutions();
            }, 500);
          } else {
            solution.style.backgroundColor = "red";
            wrongcount++;
            wrong.innerHTML = wrongcount;
          }
        }
        if (suboradd == 2) {
          if (solution.innerHTML == num1 * num2) {
            solution.style.backgroundColor = "green";
            document.body.style.pointerEvents = "none";

            rightcount++;
            localStorage.setItem("advancedright", rightcount);
            right.innerHTML = rightcount;

            setTimeout(() => {
              for (let sol of solutionsplace) {
                sol.style.backgroundColor = "";
                document.body.style.pointerEvents = "auto";
                localStorage.setItem("advancedwrong", wrongcount);
              }
              suboraddfunc();
              setindex();
              updateNumbers();
              giveproblem();
              givesolutions();
            }, 500);
          } else {
            solution.style.backgroundColor = "red";
            wrongcount++;
            wrong.innerHTML = wrongcount;
          }
        }
        if (suboradd == 3) {
          if (solution.innerHTML == num1) {
            solution.style.backgroundColor = "green";
            document.body.style.pointerEvents = "none";

            rightcount++;
            localStorage.setItem("advancedright", rightcount);
            right.innerHTML = rightcount;

            setTimeout(() => {
              for (let sol of solutionsplace) {
                sol.style.backgroundColor = "";
                document.body.style.pointerEvents = "auto";
                localStorage.setItem("advancedwrong", wrongcount);
              }
              suboraddfunc();
              setindex();
              updateNumbers();
              giveproblem();
              givesolutions();
            }, 500);
          } else {
            solution.style.backgroundColor = "red";
            wrongcount++;
            wrong.innerHTML = wrongcount;
          }
        }
      });
    }
  };

  const setscore = () => {
    right.innerHTML = localStorage.getItem("advancedright");
    wrong.innerHTML = localStorage.getItem("advancedwrong");
  };
  const scorereset = () => {
    resetbutton.addEventListener("click", (e) => {
      e.preventDefault();
      rightcount = 0;
      wrongcount = 0;
      localStorage.setItem("advancedright", rightcount);
      localStorage.setItem("advancedwrong", wrongcount);
      right.innerHTML = rightcount;
      wrong.innerHTML = wrongcount;
    });
  };
  changeDifficulty();
  suboraddfunc();
  updateNumbers();
  setindex();
  giveproblem();
  givesolutions();
  wrongorright();
  setscore();
  scorereset();
});
