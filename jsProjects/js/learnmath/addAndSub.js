function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("load", () => {
  let suboradd;
  let num1, num2;
  let problemplace = document.querySelector(".addorsubproblem>h1");
  let solutionsplace = document.querySelectorAll(".addorsol");
  let right = document.querySelector(".addorright");
  let wrong = document.querySelector(".addorwrong");
  let resetbutton = document.querySelector(".addorresetbutton");
  let index;
  let rightcount = Number();
  let wrongcount = Number();
  let difficulty = document.querySelector(".addorselect");

  const suboraddfunc = () => {
    suboradd = getRandomInt(0, 2);
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
    console.log(selectedDifficulty);

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
    console.log(num1);
    console.log(num2);
  };

  const giveproblem = () => {
    if (suboradd == 0) {
      problemplace.innerText = num1 + "+" + num2 + "=";
    }
    if (suboradd == 1) {
      problemplace.innerHTML = num1 + "-" + num2 + "=";
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
            localStorage.setItem("addorsubright", rightcount);
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
            localStorage.setItem("addorsubwrong", wrongcount);
            wrong.innerHTML = wrongcount;
          }
        }
        if (suboradd == 1) {
          if (solution.innerHTML == num1 - num2) {
            solution.style.backgroundColor = "green";
            document.body.style.pointerEvents = "none";

            rightcount++;
            localStorage.setItem("addorsubright", rightcount);
            right.innerHTML = rightcount;

            setTimeout(() => {
              for (let sol of solutionsplace) {
                sol.style.backgroundColor = "";
                document.body.style.pointerEvents = "auto";
                localStorage.setItem("addorsubwrong", wrongcount);
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
    right.innerHTML = localStorage.getItem("addorsubright");
    wrong.innerHTML = localStorage.getItem("addorsubwrong");
  };
  const scorereset = () => {
    resetbutton.addEventListener("click", (e) => {
      e.preventDefault();
      rightcount = 0;
      wrongcount = 0;
      localStorage.setItem("addorsubright", rightcount);
      localStorage.setItem("addorsubwrong", wrongcount);
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
