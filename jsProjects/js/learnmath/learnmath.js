import "./addition.js";
import "./subtruction.js";
import "./multiplication.js";
import "./divide.js";
import "./addAndSub.js";
import "./advanced.js";
window.addEventListener("load", () => {
  let mainpagedisplay = document.querySelector("#mainpage");
  let additiondisplay = document.querySelector("#addition");
  let subtractiondisplay = document.querySelector("#subtraction");
  let multiplicationdisplay = document.querySelector("#multiplication");
  let dividedisplay = document.querySelector("#divide");
  let addorsubdisplay = document.querySelector("#addorsub");
  let advanceddisplay = document.querySelector("#advanced");
  let option = document.querySelectorAll(".option");
  let addition = option[0];
  let subtraction = option[1];
  let multiplication = option[2];
  let divide = option[3];
  let addorsub = option[4];
  let advanced = option[5];

  const onlyaddition = () => {
    addition.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        additiondisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };
  const onlysubtraction = () => {
    subtraction.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        subtractiondisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };

  const onlymultiplication = () => {
    multiplication.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        multiplicationdisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };
  const onlydivide = () => {
    divide.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        dividedisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };

  const onlyaddorsub = () => {
    addorsub.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        addorsubdisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };
  const onlyadvanced = () => {
    advanced.addEventListener("click", () => {
      document.body.style.cursor = "progress";
      setTimeout(() => {
        mainpagedisplay.style.display = "none";
        advanceddisplay.style.display = "block";
        document.body.style.cursor = "auto";
      }, 1000);
    });
  };

  let backbtnFunc = () => {
    let backbtns = document.querySelectorAll(".backbtn");
    for (let backbtn of backbtns) {
      backbtn.addEventListener("click", (e) => {
        document.body.style.cursor = "progress";
        e.preventDefault();
        setTimeout(() => {
          mainpagedisplay.style.display = "block";
          additiondisplay.style.display = "none";
          subtractiondisplay.style.display = "none";
          multiplicationdisplay.style.display = "none";
          dividedisplay.style.display = "none";
          addorsubdisplay.style.display = "none";
          advanceddisplay.style.display = "none";
          document.body.style.cursor = "auto";
        }, 1000);
      });
    }
  };
  onlyaddorsub();
  onlydivide();
  onlymultiplication();
  onlysubtraction();
  onlyaddition();
  onlyadvanced();
  backbtnFunc();
});
