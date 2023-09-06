import "./functionality.js";

window.addEventListener("load", () => {
  let scale = document.querySelector(".scale");
  let scaledn = document.querySelector(".scaledn");
  scale.addEventListener("click", () => {
    scale.style.display = "none";
    scaledn.style.display = "block";
  });
  scaledn.addEventListener("click", () => {
    scale.style.display = "flex";
    scaledn.style.display = "none";
    let cardsplace = document.querySelector(".cards");
    while (cardsplace.firstChild) {
      cardsplace.firstChild.remove();
    }
  });
});
