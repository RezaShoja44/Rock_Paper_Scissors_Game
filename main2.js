window.onload = function() {
  const a = ["Rock", "Paper", "Scissors"];
  let computerSelection;
  let playerSelection;
  let scorePlayer = 0;
  let scoreComputer = 0;

  function computerPlay() {
    return a[rando(0, 2)];
  }

  function playRound(playerSelection, computerSelection) {
    function addRow(tableID) {
      let tableRef = document.getElementById(tableID);
      let newRow = tableRef.insertRow(-1);

      let pSelectionCell = newRow.insertCell(-1);
      let pSelectionText = document.createTextNode(playerSelection);
      pSelectionCell.appendChild(pSelectionText);

      let cSelectionCell = newRow.insertCell(-1);
      let cSelectionText = document.createTextNode(computerSelection);
      cSelectionCell.appendChild(cSelectionText);

      let pScoreCell = newRow.insertCell(-1);
      let pScoreText = document.createTextNode(scorePlayer);
      pScoreCell.appendChild(pScoreText);

      let cScoreCell = newRow.insertCell(-1);
      let cScoreText = document.createTextNode(scoreComputer);
      cScoreCell.appendChild(cScoreText);

      let Status = newRow.insertCell(-1);
      let StatusText;
      if (playerSelection == computerSelection) {
        StatusText = document.createTextNode("No Win!");
        Status.appendChild(StatusText);
      } else if (
        playerSelection == "Paper" &&
        computerSelection == "Scissors"
      ) {
        StatusText = document.createTextNode("AI Wins!");
        Status.appendChild(StatusText);
      } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        StatusText = document.createTextNode("AI Wins!");
        Status.appendChild(StatusText);
      } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        StatusText = document.createTextNode("AI Wins!");
        Status.appendChild(StatusText);
      } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        StatusText = document.createTextNode("Player Wins!");
        Status.appendChild(StatusText);
      } else {
        StatusText = document.createTextNode("Player Wins!");
        Status.appendChild(StatusText);
      }
    }

    function winnerBorad(pragraphID) {
      let pragraphRef;
      if (scorePlayer == 3) {
        pragraphRef = document.getElementById("winner").innerHTML =
          "***And The Winner is Player***";
      } else {
        pragraphRef = document.getElementById("winner").innerHTML =
          "***And The Winner is AI***";
      }
    }

    while (scorePlayer < 3 && scoreComputer < 3) {
      computerSelection = computerPlay();
      playerSelection = computerPlay();
      if (playerSelection == computerSelection) {
      } else if (
        playerSelection == "Paper" &&
        computerSelection == "Scissors"
      ) {
        scoreComputer++;
      } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        scoreComputer++;
      } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        scorePlayer++;
      } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        scoreComputer++;
      } else {
        scorePlayer++;
      }
      addRow("table");
      winnerBorad();
    }
  }

  playRound(playerSelection, computerSelection);
};
