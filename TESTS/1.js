window.addEventListener("load", () => {
  const getRandomNumbers = (count, max) => {
    let randomNumbers = new Set();

    while (randomNumbers.size < count) {
      let randomNumber = Math.floor(Math.random() * (max + 1));
      randomNumbers.add(randomNumber);
    }

    return Array.from(randomNumbers);
  };

  let randomNumbers = getRandomNumbers(18, 17);
  console.log(randomNumbers);
});
