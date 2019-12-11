const a = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
  return a[rando(0, 2)];
}

function playRound(playerSelection, computerSelection) {
  while (scorePlayer < 3 && scoreComputer < 3) {
    computerSelection = computerPlay();
    playerSelection = computerPlay();
    console.log("AI : " + computerSelection, "   Player : " + playerSelection);
    if (playerSelection == computerSelection) {
      console.log("	No Win");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      console.log("	AI Wins!");
      scoreComputer++;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
      console.log("	AI Wins!");
      scoreComputer++;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      console.log("	Player Wins!");
      scorePlayer++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      console.log("	AI Wins!");
      scoreComputer++;
    } else {
      console.log("	Player Wins!");
      scorePlayer++;
    }
    console.log("Computer : " + scoreComputer, "	 Player: " + scorePlayer);
    console.log("");
  }

  if (scorePlayer == 3) {
    console.log("And The Winner is Player, Score : " + scorePlayer);
  } else {
    console.log("And The Winner is AI, Score : " + scoreComputer);
  }
}

playRound(playerSelection, computerSelection);
