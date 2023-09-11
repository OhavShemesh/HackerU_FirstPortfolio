let jsgrid = document.querySelectorAll(".jswork");
let tictactoe = jsgrid[0];
let inarow = jsgrid[1];
let trivia = jsgrid[2];
let learnmath = jsgrid[3];
let memory = jsgrid[4];
let pbuilder = jsgrid[5];
let gallery = jsgrid[6];
let shoppinglist = jsgrid[7];
window.addEventListener("load", () => {
  tictactoe.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/first/jsfirst.html";
  });
  inarow.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/second/jssecond.html";
  });
  trivia.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/eighth/eighth.html";
  });
  learnmath.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/fourth/jsfourth.html";
  });
  memory.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/fifth/jsfifth.html";
  });
  pbuilder.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/sixth/sixth.html";
  });
  gallery.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/seventh/seventh.html";
  });
  shoppinglist.addEventListener("click", () => {
    window.location.href = "jsProjects/jsמבוא/third/jsthird.html";
  });
});
