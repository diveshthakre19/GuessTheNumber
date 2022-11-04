// for easy : 0-10
// for medium : 0-30
// for hard : 0-100
let computerGuess = "";
let message = document.querySelector(".message");
let userInput = document.querySelector(".userInput");
let attempt = document.querySelector(".attempt");
let levels = document.querySelector("select");
let difficulity = document.querySelector(".message span");
let leveleSelection = document.querySelector(".levelSelection");
let playArea = document.querySelector(".playArea");

function startGame() {
  leveleSelection.style.display = "none";
  playArea.style.display = "flex";

  if (levels.value === "easy") {
    computerGuess = Math.floor(Math.random() * 11);
    console.log(computerGuess);

    difficulity.innerHTML = "1-10";
  } else if (levels.value === "medium") {
    computerGuess = Math.floor(Math.random() * 31);
    console.log(computerGuess);

    difficulity.innerHTML = "1-30";
  } else if (levels.value === "hard") {
    computerGuess = Math.floor(Math.random() * 111);
    console.log(computerGuess);
    difficulity.innerHTML = "1-100";
  }
}

const back = () => {
  leveleSelection.style.display = "flex";
  playArea.style.display = "none";
};

// levels.addEventListener("change",setLevels())

const playGame = (event) => {
  event.preventDefault();
  if (computerGuess == userInput.value) {
    message.innerHTML = "You won the Game";
    celebrate();
    startGame();
    setTimeout(() => {
      // window.location.reload();
      computerGuess = Math.floor(Math.random() * 11);
      // message.innerHTML = "Message";
      userInput.value = "";
      attempt.innerHTML = "0";
    }, 1500);
  } else if (computerGuess > userInput.value) {
    userInput.value = "";
    message.innerHTML = "Guess a greater number";
  } else if (computerGuess < userInput.value) {
    userInput.value = "";
    message.innerHTML = "Guess a smaller number";
  }
  attempt.innerHTML = Number(attempt.innerHTML) + 1;
};

const celebrate = () => {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};
