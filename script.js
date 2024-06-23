document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll(".choice");
  const userScoreDisplay = document.getElementById("userScore");
  const computerScoreDisplay = document.getElementById("computerScore");
  const resultDisplay = document.querySelector(".result");
  const computerChoiceDisplay = document.querySelector(".computer-choice");

  let userScore = 0;
  let computerScore = 0;

  // Computer choice
  function getComputerChoice() {
    const choices = ["🪨", "📃", "✂️"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  // Determine winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "🪨" && computerChoice === "✂️") ||
      (userChoice === "📃" && computerChoice === "🪨") ||
      (userChoice === "✂️" && computerChoice === "📃")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  // Update scores and result
  function updateScoreAndResult(result, userChoice, computerChoice) {
    switch (result) {
      case "You win!":
        userScore++;
        break;
      case "You lose!":
        computerScore++;
        break;
      default:
        break;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.innerHTML = `<p>${result} You chose ${userChoice}. Computer chose ${computerChoice}.</p>`;
  }

  // Event listener for user choice
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.textContent;
      const computerChoice = getComputerChoice();
      computerChoiceDisplay.textContent = computerChoice;
      resultDisplay.innerHTML = `<p>Thinking...</p>`;
      setTimeout(() => {
        const result = determineWinner(userChoice, computerChoice);
        updateScoreAndResult(result, userChoice, computerChoice);
        computerChoiceDisplay.style.animation = "fadeIn 0.5s ease";
      }, 1000);
    });
  });
});
