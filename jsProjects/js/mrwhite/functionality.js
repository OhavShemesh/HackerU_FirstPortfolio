window.addEventListener("load", () => {
  let players = document.querySelectorAll(".player");
  let cardsplace = document.querySelector(".cards");
  let numberOfPlayers;
  let wordsarr = ["Submarine", "Grandma", "Builder"];
  let mrwhitearr = ["Spaceship", "Grandpa", "Teacher"];
  let randomnumber;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const cardsamount = () => {
    for (let player of players) {
      player.addEventListener("click", () => {
        numberOfPlayers = player.innerHTML;
        console.log(numberOfPlayers);
        addcards();
        placewords();
      });
    }
  };

  const addcards = () => {
    cardsplace.innerHTML = "";
    for (let i = 0; i < numberOfPlayers; i++) {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = "?";
      cardsplace.appendChild(card);
    }
    randomnumber = getRandomInt(0, 3);
  };
  const placewords = () => {
    let cards = document.querySelectorAll(".card");
    let secretword = document.querySelector(".secretword");
    let wordh1 = document.querySelector(".secretword h1");
    for (let card of cards) {
      card.addEventListener("click", () => {
        secretword.style.visibility = "visible";
        console.log(wordsarr[randomnumber]);
        wordh1.innerHTML = wordsarr[randomnumber];
      });
    }
    let okbtn = document.querySelector(".okbtn");
    okbtn.addEventListener("click",()=>{
      
    })
  };
  cardsamount();
});
