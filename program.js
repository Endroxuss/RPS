 function game() {  // start the game
    for (let i = 1; i <= 5; i++) {
        playRps(i); 
    }
    logWins();
}

function playRps(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice() {   // Asks the user for input
    let input = prompt('Enter Rock , Paper or Scissors');
    while (input == null) {
        input = prompt('Enter Rock , Paper or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Enter Rock , Paper or Scissors');
        while (input == null) {
            input = prompt('Enter Rock , Paper or Scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {  // validates user's input
    return choices.includes(choice);
}

function getComputerChoice() { // gets computer choice
    return choices[Math.floor(Math.random() * choices.length)];
}
const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function checkWinner(player,computer) {
    if(player === computer) {
        return 'Tie';
    } 
    else if (
        (player === 'rock' && computer == 'scissors') ||
        (player === 'paper' && computer == 'rock') || 
        (player === 'scissors' && computer == 'paper')
        ) {
        return 'Player wins';
    } else {
        return 'Computer wins';
    }

}
function logWins() {
   let playerWins = winners.filter((win) => win == 'Player wins').length;
   let computerWins = winners.filter((win) => win == 'Computer wins').length;
   let ties = winners.filter((win) => win == 'Tie').length;
   console.log('Results:');
   console.log('Player wins:', playerWins);
   console.log('Computer wins:', computerWins);
   console.log("Ties:", ties);
}
function logRound(playerSelection,computerSelection,winner,round) {
    console.log('Round:', round);
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    console.log(winner, 'Won the round');
}
game();
