let cards = document.querySelectorAll(".card");
let covers = document.querySelectorAll(".cover");
let visiblecards = 0;
let flipedcards = [];
let index1;
let index2;
let clicked = 1;
let moves = document.querySelector(".moves");
let roundswon = document.querySelector(".rounds");
roundswon.innerHTML = localStorage.getItem("roundswon");
moves.innerHTML = 0;

window.addEventListener("load", () => {
  const getRandomNumbers = (count, max) => {
    let randomNumbers = new Set();
    while (randomNumbers.size < count) {
      let randomNumber = Math.floor(Math.random() * (max + 1));
      randomNumbers.add(randomNumber);
    }
    return Array.from(randomNumbers);
  };

  const shuffle = () => {
    console.log(randomNumbers);
    cards[0].style.gridArea = "card" + randomNumbers[0];
    cards[1].style.gridArea = "card" + randomNumbers[1];
    cards[2].style.gridArea = "card" + randomNumbers[2];
    cards[3].style.gridArea = "card" + randomNumbers[3];
    cards[4].style.gridArea = "card" + randomNumbers[4];
    cards[5].style.gridArea = "card" + randomNumbers[5];
    cards[6].style.gridArea = "card" + randomNumbers[6];
    cards[7].style.gridArea = "card" + randomNumbers[7];
    cards[8].style.gridArea = "card" + randomNumbers[8];
    cards[9].style.gridArea = "card" + randomNumbers[9];
    cards[10].style.gridArea = "card" + randomNumbers[10];
    cards[11].style.gridArea = "card" + randomNumbers[11];
    cards[12].style.gridArea = "card" + randomNumbers[12];
    cards[13].style.gridArea = "card" + randomNumbers[13];
    cards[14].style.gridArea = "card" + randomNumbers[14];
    cards[15].style.gridArea = "card" + randomNumbers[15];
    cards[16].style.gridArea = "card" + randomNumbers[16];
    cards[17].style.gridArea = "card" + randomNumbers[17];
  };
  const getindex = () => {
    for (let card of cards) {
      card.addEventListener("click", () => {
        if (clicked == 1) {
          index1 = [...cards].indexOf(card);
          clicked++;
        } else if (clicked == 2) {
          index2 = [...cards].indexOf(card);
          clicked = 1;
        }
      });
    }
  };
  const visibility = () => {
    for (let card of cards) {
      card.addEventListener("click", () => {
        visiblecards++;
      });
    }
  };

  const flipcard = () => {
    for (let cover of covers) {
      cover.addEventListener("click", () => {
        cover.style.opacity = "0";
      });
    }
  };
  const flipback = () => {
    for (let card of cards) {
      card.addEventListener("click", () => {
        if (visiblecards == 2) {
          document.body.style.pointerEvents = "none";
          setTimeout(() => {
            for (let cover of covers) {
              cover.style.opacity = "1";
            }
            moves.innerHTML++;
            document.body.style.pointerEvents = "auto";
          }, 1000);
        }
      });
    }
  };
  const pushtoarray = () => {
    for (let card of cards) {
      card.addEventListener("click", () => {
        flipedcards = [...flipedcards, card];

        if (visiblecards == 2) {
          if (
            flipedcards[0].getAttribute("data-value") ==
            flipedcards[1].getAttribute("data-value")
          ) {
            covers[index1].style.display = "none";
            covers[index2].style.display = "none";
            console.log("Won");
            visiblecards = 0;
            flipedcards = [];
            won();
          } else {
            visiblecards = 0;
            flipedcards = [];
          }
        }
      });
    }
  };
  const checkAllCoversHidden = () => {
    for (let cover of covers) {
      if (cover.style.display !== "none") {
        return false;
      }
    }
    return true;
  };

  const won = () => {
    checkAllCoversHidden();
    if (checkAllCoversHidden()) {
      setTimeout(() => {
        alert("Game won!");
        roundswon.innerHTML++;
        localStorage.setItem("roundswon", roundswon.innerHTML);
        roundswon.innerHTML = localStorage.getItem("roundswon");
        location.reload();
      }, 100);
    }
  };
  let randomNumbers = getRandomNumbers(18, 17);
  shuffle();
  getindex();
  visibility();
  flipcard();
  flipback();
  pushtoarray();
  won();
});
