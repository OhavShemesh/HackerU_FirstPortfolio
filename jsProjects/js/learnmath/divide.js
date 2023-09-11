window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  let index;
  let num1, num2;
  let problemplace = document.querySelector(".divideproblem>h1");
  let solutions = document.querySelectorAll(".divsol");
  let difficulty = document.querySelector(".divselect");
  let right = document.querySelector(".divright");
  let wrong = document.querySelector(".divwrong");
  let rightcount = localStorage.getItem("divrightcount");
  right.innerHTML = rightcount;
  let wrongcount = localStorage.getItem("divwrongcount");
  wrong.innerHTML = wrongcount;
  localStorage.setItem("difficulty", 10);
  const changeDifficulty = () => {
    difficulty.addEventListener("change", (option) => {
      let selectedoption = option.target.value;
      localStorage.setItem("difficulty", parseInt(selectedoption));
      updateNumbers();
      giveproblem();
      soloptions();
    });
  };
  const setindex = () => {
    index = getRandomInt(0, 5);
  };

  const updateNumbers = () => {
    let selectedDifficulty = localStorage.getItem("difficulty");
    selectedDifficulty = parseInt(selectedDifficulty);
    console.log(selectedDifficulty);

    if (selectedDifficulty === 10) {
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

  const resetcount = () => {
    let resetbtn = document.querySelector(".divresetbutton");
    resetbtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("divrightcount", 0);
      localStorage.setItem("divwrongcount", 0);
      wrongcount = 0;
      rightcount = 0;
      right.innerHTML = 0;
      wrong.innerHTML = 0;
    });
  };

  const giveproblem = () => {
    updateNumbers();
    problemplace.innerHTML = num1 + "&divide" + num2 + "=";
  };

  const soloptions = () => {
    console.log("index", index);
    for (let solution of solutions) {
      let result = getRandomInt(num1, num2 / num1);
      solution.innerHTML = result.toFixed(2);
    }
    solutions[index].innerHTML = (num1 / num2).toFixed(2);
  };

  const rightorwrong = () => {
    for (let solution of solutions) {
      solution.addEventListener("click", () => {
        if (solution.innerHTML == (num1 / num2).toFixed(2)) {
          solution.style.backgroundColor = "green";
          console.log(difficulty.value);
          rightcount++;
          right.innerHTML = rightcount;
          localStorage.setItem("divrightcount", rightcount);

          document.body.style.pointerEvents = "none";

          setTimeout(() => {
            for (let sol of solutions) {
              sol.style.backgroundColor = "";
            }
            document.body.style.pointerEvents = "auto";
            setindex();
            updateNumbers();
            giveproblem();
            soloptions();
          }, 500);
        }
        if (solution.innerHTML != (num1 / num2).toFixed(2)) {
          solution.style.backgroundColor = "red";
          wrongcount++;
          localStorage.setItem("divwrongcount", wrongcount);

          wrong.innerHTML = wrongcount;
        }
      });
    }
  };
  setindex();
  changeDifficulty();
  resetcount();
  giveproblem();
  rightorwrong();
  soloptions();
});
