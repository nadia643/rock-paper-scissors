const userScore = 0;
const computerScore=0;
// console.log(userScore);
// console.log(computerScore);

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function computerPlay() {
    const items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random()*items.length)];
}

function game(userSelection) {
    const computerSelection = computerPlay().toLowerCase();
    console.log("User choice: " + userSelection);
    console.log("Computer choice: " + computerSelection);
    // switch(userSelection + computerSelection) {
    //     case "rs":
    //     case "pr":
    //     case "sp":
    //         console.log("User wins");
    //         break;
    //     case "rp":
    //     case "pr":
    //     case "sr":
    //         console.log("Computer wins boooo");
    //         break;
    //     case "rr":
    //     case "pp":
    //     case "ss":
    //         console.log("DRAWWWW");
    //         break;
    // }
}

// game("c");

function main() {
rock_div.addEventListener('click', function() {
    game("rock");
})
paper_div.addEventListener('click', function() {
    game("paper");
})
scissors_div.addEventListener('click', function() {
    game("scissors");
})

};

main();


  
// const playerSelection = 'rock';

// console.log(computerSelection);
// console.log(playerSelection);



// function playRound(playerSelection, computerSelection) {
// if(playerSelection === 'rock' && computerSelection === 'paper') {
//     return "You lose! Paper beats rock!";
// } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
//     return "You win! Rock beats scissors";
// } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//     return "It's a draw!";
// } else if(playerSelection === 'paper' && computerSelection === 'rock') {
//     return "You win! Paper beats rock!";
// } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
//     return "You lose! Scissors beats paper";
// } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//     return "It's a draw!"; 
// } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     return "You win! Scissors beats paper";
// } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     return "You lose! Rock beats scissors";
// } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//     return "It's a draw!"; 
// }

// } 


// console.log(playRound(playerSelection, computerSelection));